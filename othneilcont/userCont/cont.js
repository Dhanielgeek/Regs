const userModel = require('../userModel/userMode')
  const {userValidate} = require('../utilities/validator')
  const bcrypt = require('bcrypt')
  const jwt = require('jsonwebtoken')
exports.createUser = async(req, res)=>{
    try {
        const data = {
          fullName: req.body.fullName,
          email: req.body.email,
          password: req.body.password,
          address: req.body.address,
           state: req.body.state, 
           country:req.body.country,
            password: req.body.password, 
            dateOfBirth: req.body.dataOfBirth, 
            phoneNumber:req.body.phoneNumber
  };
  await userValidate.validateAsync(data)

      const userExists = await userModel.findOne({email: data.email});
      if (userExists) {
          return res.status(409).json({
              message: `User with email ${userExists.email} already exists.`

          });
      }
      
      const saltedPassWord=bcrypt.genSaltSync(10)
      const hashedPassword = await bcrypt.hashSync(data.password,saltedPassWord)
      
      
        const user = await new userModel({
          fullName: data.fullName,
          email: data.email,
          password: hashedPassword,
          address: data.address,
           state: data.state, 
           country: data.country,
            dateOfBirth: data.dataOfBirth, 
            phoneNumber: data.phoneNumber
        });

      
    await user.save();
    if (user) {
      return res.status(200).json({
        message:"User Created",
        data: user
      })
    } else {
      return res.status(404).json({
        message:"User not created"
      })
    }
    } catch (error) {
        res.json({
          message : error.message
        })
    }
}
exports.logIn = async (req, res) => {
  try {
    const { email, phoneNumber, password } = req.body;

    const userByEmail = await userModel.findOne({ email });
    const userByPhoneNumber = await userModel.findOne({ phoneNumber });

    if (!userByEmail && !userByPhoneNumber) {
      return res.status(404).json({
        message: "User not found"
      });
    }
    const user = userByEmail || userByPhoneNumber;
    const checkPassword = await bcrypt.compare(password, user.password);

    if (!checkPassword) {
      return res.status(400).json({
        message: "Invalid Password"
      });
    }
     
    const token = jwt.sign({
      fullname:user.fullName,
      email: user.email,
      userId: user._id,
      phoneNumber:user.phoneNumber
    },
    process.env.jsonSecret, {expiresIn: "1d"});

   user.token = token
    return res.status(200).json({
      message:"lOGIN SUCESSFUL",
      data: token
    })
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};