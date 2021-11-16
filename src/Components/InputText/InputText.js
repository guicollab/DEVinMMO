import PropType from "prop-types";
import { StyledInput } from "./InpuText.style";

const InputText = (props) => {
  const {
    type,
    id,
    name,
    placeholder = null,
    value,
    onChange,
    ...rest
  } = props;

  return (
    <>
      {type === "textarea" ? (
        <StyledInput
          id={id ?? name}
          as='textarea'
          rows={5}
          cols={40}
          name={name}
          type='text'
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          {...rest}
          {...rest.field}
        />
      ) : (
        <StyledInput
          id={id ?? name}
          name={name}
          type='text'
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          {...rest}
          {...rest.field}
        />
      )}
    </>
  );
};

export default InputText;

InputText.propTypes = {
  id: PropType.string,
  name: PropType.string,
  placeholder: PropType.string,
};
