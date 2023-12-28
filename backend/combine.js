const data = [
    {name: "dan",
    stack: "Frontend",
    average: 70
    },

    {name: "sam",
    stack: "Frontend",
    average: 85
    },
    {name: "joy",
    stack: "Frontend",
    average: 72
    }
]

const newData = [...data].sort((a, b) => b.average - a.average);

console.log(newData);



