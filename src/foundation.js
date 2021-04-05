module.exports = {
  methods: {
    function: {
      description:
        "Creates and names a function. A function is a set of statements that perform a task. Optionally, functions can have parameters. Parameters are variables that are scoped to the function, that can be assigned a value when calling the function.Multiple parameters can be given by seperating them with commmas. From the MDN entr",
      overloads: [
        [
          { name: "name", type: "String", description: "Name of the function" },
          {
            name: "parameters",
            type: "Parameters",
            description:
              "Named variable passed into a function. Parameter variables are used to import arguments into functions.",
          },
        ],
      ],
    },
    let: {
      description:
        "Creates and names a new variable. A variable is a container for a value. Variables that are declared with let will have block-scope. This means that the variable only exists within the block that it is created within.",
      overloads: [
        [
          {
            name: "name",
            description: "Name for new variable.",
            type: "String",
          },
          {
            name: "value",
            description: "Value to assign to the variable (Optional)",
          },
        ],
      ],
    },
    if: {
      description:
        "The if-else statement helps control the flow of your code. A condition is placed between the parenthesis following 'if', when that condition evalues to truthy, the code between the following curly braces is run. Alternatively, when the condition evaluates to falsy, the code between the curly braces of 'else' block is run instead. Writing an else block is optional.",
      overloads: [[{ name: "condition", type: "Boolean" }]],
    },
    else: {
      description:
        "The if-else statement helps control the flow of your code. A condition is placed between the parenthesis following 'if', when that condition evalues to truthy, the code between the following curly braces is run. Alternatively, when the condition evaluates to falsy, the code between the curly braces of 'else' block is run instead. Writing an else block is optional.",
      overloads: [[null]],
    },
  },
};
