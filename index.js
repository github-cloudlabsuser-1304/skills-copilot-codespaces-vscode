const data = [
    [
        { name: 'John', age: 28 },
        { name: 'Jane', age: 22 }
    ],
    [
        { name: 'Bob', age: 34 },
        { name: 'Alice', age: 25 }
    ]
];

function extractNamesFromNestedArray(nestedArray) {
    return nestedArray.flatMap(innerArray => innerArray.map(item => item.name));
}

// Example usage:
const names = extractNamesFromNestedArray(data);
console.log(names); // Output: ['John', 'Jane', 'Bob', 'Alice']