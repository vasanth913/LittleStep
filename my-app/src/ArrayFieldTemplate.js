import React from "react";

const ArrayFieldTemplate = props => {
  const {
    formContext,
    onAddClick,
    TitleField,
    idSchema,
    uiSchema,
    title,
    required,
    formData
  } = props;
  const { setOpen } = formContext;

  function handleAdd(event) {
    event.persist();
    onAddClick(event);
    setOpen(true);
  }

  function handleEdit(event) {
    event.persist();
    setOpen(true);
  }

  return (
    <div>
      <div
        className="row array-item-list px-0 mx-0"
        key={`array-item-list-${props.idSchema.$id}`}
      >
        {`    data`} {JSON.stringify(formData)}
        {formData &&
          formData.length > 0 &&
          formData.map((el, idx) => {
            return (

                <div key={idx}>
                  {el.name} {el.age}
                  <button onClick={handleEdit}>Edit</button>
                </div>
            );
          })}
      </div>
      {props.canAdd && (
        <button
          className="array-item-add"
          onClick={handleAdd}
          disabled={props.disabled || props.readonly}
        >
          +
        </button>
      )}
    </div>
  );
};

export default ArrayFieldTemplate;