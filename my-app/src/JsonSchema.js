import { JsonForms } from '@jsonforms/react';
import { useState } from 'react';
import { vanillaCells, vanillaRenderers } from '@jsonforms/vanilla-renderers';
//import { materialCells, materialRenderers } from '@jsonforms/material-renderers';
import Button from '@mui/material/Button';

const schema = {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        minLength: 1
      },
      done: {
        type: 'boolean'
      },
      due_date: {
        type: 'string',
        format: 'date'
      },
      recurrence: {
        type: 'string',
        enum: ['Never', 'Daily', 'Weekly', 'Monthly']
      },
    comments: {
                "type": "array",
                "items": {
                    "type": "object",
                    "properties": {
                    "date": {
                        "type": "string",
                        "format": "date"
                    },
                    "message": {
                        "type": "string",
                        "maxLength": 5
                    },
                    "enum": {
                        "type": "string",
                        "enum": [
                        "foo",
                        "bar"
                        ]
                    }
                    }
                }
        }
    },
    required: ['name', 'due_date']
  };

// const schema = {
//     "type": "object",
//     "properties": {
//       "name": {
//         "type": "string",
//         "minLength": 3,
//         "description": "Please enter your name"
//       },
//       "vegetarian": {
//         "type": "boolean"
//       },
//       "birthDate": {
//         "type": "string",
//         "format": "date"
//       },
//       "nationality": {
//         "type": "string",
//         "enum": [
//           "DE",
//           "IT",
//           "JP",
//           "US",
//           "RU",
//           "Other"
//         ]
//       },
//       "personalData": {
//         "type": "object",
//         "properties": {
//           "age": {
//             "type": "integer",
//             "description": "Please enter your age."
//           },
//           "height": {
//             "type": "number"
//           },
//           "drivingSkill": {
//             "type": "number",
//             "maximum": 10,
//             "minimum": 1,
//             "default": 7
//           }
//         },
//         "required": [
//           "age",
//           "height"
//         ]
//       },
//       "occupation": {
//         "type": "string"
//       },
//       "postalCode": {
//         "type": "string",
//         "maxLength": 5
//       }
//     },
//     "required": [
//       "occupation",
//       "nationality"
//     ]
//   }

const uischema = {
    type: 'VerticalLayout',
    elements: [
      {
        type: 'Control',
        label: false,
        scope: '#/properties/done'
      },
      {
        type: 'Control',
        scope: '#/properties/name'
      },
      {
        type: 'HorizontalLayout',
        elements: [
          {
            type: 'Control',
            scope: '#/properties/due_date'
          },
          {
            type: 'Control',
            scope: '#/properties/recurrence'
          }
        ]
      },
      {
        "type": "VerticalLayout",
        "elements": [
            {
            "type": "Control",
            "scope": "#/properties/comments"
            }
        ]
      }
    ]
  };

// const uischema = {
//     "type": "VerticalLayout",
//     "elements": [
//       {
//         "type": "HorizontalLayout",
//         "elements": [
//           {
//             "type": "Control",
//             "scope": "#/properties/name"
//           },
//           {
//             "type": "Control",
//             "scope": "#/properties/personalData/properties/age"
//           },
//           {
//             "type": "Control",
//             "scope": "#/properties/birthDate"
//           }
//         ]
//       },
//       {
//         "type": "Label",
//         "text": "Additional Information"
//       },
//       {
//         "type": "HorizontalLayout",
//         "elements": [
//           {
//             "type": "Control",
//             "scope": "#/properties/personalData/properties/height"
//           },
//           {
//             "type": "Control",
//             "scope": "#/properties/nationality"
//           },
//           {
//             "type": "Control",
//             "scope": "#/properties/occupation",
//             "suggestion": [
//               "Accountant",
//               "Engineer",
//               "Freelancer",
//               "Journalism",
//               "Physician",
//               "Student",
//               "Teacher",
//               "Other"
//             ]
//           }
//         ]
//       }
//     ]
//   }

const data =  {
    "name": "John Doe",
    "vegetarian": false,
    "birthDate": "1985-06-02",
    "personalData": {
      "age": 34
    },
    "postalCode": "12345"
  }
  
  const initialData = {
    name: 'Max Power',
  };

const JsonSchema = () => {

    const [data, setData] = useState(initialData);

    const stringifiedData = JSON.stringify(data, null, 2);

    const submitFun = (data) => {
        console.log('Value', data);
    }

return (
    <div style={{ display: 'flex'}}>
       <JsonForms
        schema={schema}
        uischema={uischema}
        data={data}
        renderers={vanillaRenderers}
        cells={vanillaCells}
        onSubmit={submitFun}
        onChange={({ data, errors }) => setData(data)}
      />
       <div>
            <pre id='boundData'>{stringifiedData}</pre>
        </div>
    <Button onClick={() => submitFun(stringifiedData)} color='primary'>
        submit
      </Button>
      <Button onClick={() => setData({})} color='primary'>
        Clear form data
      </Button>
     </div>
  );

}

export default JsonSchema;