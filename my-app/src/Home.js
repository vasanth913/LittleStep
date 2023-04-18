import Form from 'react-jsonschema-form';
import  ArrayFieldTemplate from "./ArrayFieldTemplate";

const Home = () => {
    const schema = {
        "title": "A registration form",
        "description": "A simple form example.",
        "type": "object",
        // "required": [
        //   "firstName",
        //   "lastName"
        // ],
        "properties": {
          "firstName": {
            "type": "string",
            "title": "First name",
            "default": "Chuck"
          },
          "lastName": {
            "type": "string",
            "title": "Last name"
          },
          "age": {
            "type": "integer",
            "title": "Age"
          },
          "bio": {
            "type": "string",
            "title": "Bio"
          },
          "password": {
            "type": "string",
            "title": "Password",
            "minLength": 3
          },
          "telephone": {
            "type": "string",
            "title": "Telephone",
            "minLength": 10
          },
          "referrals": {
            type: "array",
            items:{
                type: "object",
                required: ['name','email'],
                properties:{
                    name: {type: "string"},
                    email: {
                        title: "Email",
                        type: "string",
                        format: "email"
                    }
                }
            }
          },
          "arrayTel": {
            type: "array",
            title: "This is array template",
            canAdd: true,
            items:{
                type: "object",
                required: ['name','email'],
              
                properties:{
                    name: {type: "string"},
                    email: {
                        title: "Email",
                        type: "string",
                        format: "email",
                    
                    }
                }
            }
          }
        }
      }

      

    // const schema = {
    //     type: "object",
    //     properties: {
    //       foo: {
    //         type: "object",
    //         properties: {
    //           bar: {type: "string"}
    //         }
    //       },
    //       baz: {
    //         type: "array",
    //         items: {
    //           type: "object",
    //           properties: {
    //             description: {
    //               "type": "string"
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }

    //   const uiSchema = {
    //     foo: {
    //       bar: {
    //         "ui:widget": "textarea"
    //       },
    //     },
    //     baz: {
    //       // note the "items" for an array
    //       items: {
    //         description: {
    //           "ui:disabled": "textarea"
    //         }
    //       }
    //     },
    //     done: {
    //         "ui:widget": "radio" // could also be "select"
    //     }
    //   }

      const MadTextWidget = (props) => {
        return (
          <input type="text"
            style={{backgroundColor: "red"}}
            className="custom"
            value={props.value}
            required={props.required}
            onChange={(event) => props.onChange(event.target.value + " - ")} />
        );
      };

      const defaultArrayItem = (props) => {
          return (
            <>
              {props.children}
              {props.hasRemove && <button onClick={props.onDropIndexClick(props.index)}>Remove</button>}
            </>
          )
      }

      const myArrTemplate = (props) => {
        return (
          <div>
              {props.title}
              <br />
              {props.items.map(defaultArrayItem)}
              {props.canAdd && <button type="button" onClick={props.onAddClick}>Add</button>}            
          </div>
        )
      }
      
      // const ArrayFieldTemplate = (props) => {
      //   return (
      //     <div>
           
      //      <button type="button" onClick={props.onAddClick}></button>
      //     </div>
      //   );
      // }
      // const widgets = {
      //   madTextWidget: MadTextWidget
      // }

      const uiSchema= {
        "firstName": {
          "ui:disabled": true
        },
        "password":{
            "ui:widget": "password",
            "ui:title": "Your password"
        },
        "arrayTel": {
          "ui:ArrayFieldTemplate": myArrTemplate
        }
      
      }


      // function ArrayFieldTemplate(props) {
      //   return (
      //     <div>
      //       {props.items.map(element => element.children)}
      //       {props.canAdd && <button type="button" onClick={props.onAddClick}></button>}
      //     </div>
      //   );
      // }

    const handleSubmit = (e) => {
     console.log('Value', e);
    }

   return (
     <div className='Container'>
      <Form
        schema={schema}  
        uiSchema={uiSchema}
        onSubmit={handleSubmit} >
            <div>
                <button type="submit"  onSubmit={handleSubmit}>Submit</button>
                <button type="button">Cancel</button>
            </div>
       </Form>
      </div>
   );
}

export default Home;