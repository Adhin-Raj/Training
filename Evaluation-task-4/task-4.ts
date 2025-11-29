// 4. Implement a template parser. It takes two inputs, template string and data object. Keys wrapped in double curly brackets should be replaced with values of given data.

// Input: 
// "Hello {{name}}, you have {{count}} new messages.", { name: "John", count: 3 }

// Output: 
// "Hello John, you have 3 new messages."


function templateParser(template:string,obj:Object) {

        for(let key in obj) {
          template =  template.replace(`{{${key}}}`,obj[key])
        }   
    

return template
}

console.log(templateParser("Hello {{name}}, you have {{count}} new messages.", { name: "John", count: 3 }))
console.log(templateParser("Hi my name is  {{name}},am a {{profession}} with an experience of {{years}} years. ", { name: "walter White", profession:"Chemistry Professor",years:20 }))