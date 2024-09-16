// string, number, boolean
const stringValue = 'hello world';
const anotherStringValue = "hello world";

const numberValue = 42;

const booleanValue = true;

// array
const firstArray = [10, 20, 30, 40];
const secondArray = [10, 'a string', { prop: 'bacon' }, [1, 2]];

// array indexing
console.log(firstArray[0]); // first value
console.log(secondArray[3]); // fourth value
console.log(secondArray[3][0]); // nested retrieval

// object
const objectVariable = { prop1: 20, prop2: 50 };

// object property access via dot notation
console.log(objectVariable.prop1);

// object property access via bracket notation
console.log(objectVariable['prop1']);

// nested object
const nestedObject = {
    layer1: {
        layer2: {
            layer3: {
                targetValue: 20
            }
        }
    }
};

// nested object property access via dot notation
console.log(nestedObject.layer1.layer2.layer3.targetValue);

// functions
const functionContainerVariable = function () {
    return 20;
}
console.log(functionContainerVariable());
