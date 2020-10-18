import React from 'react';
import TextField, {OutlinedTextFieldProps} from '@material-ui/core/TextField';
import {withFormsy} from 'formsy-react';
import {PassDownProps} from "formsy-react/dist/Wrapper";

type Props = PassDownProps<string> & OutlinedTextFieldProps;

const PureInputFormsy = (props: Props) => {
    const { errorMessage, label, variant, className, fullWidth } = props;
    const value = props.value || '';

    function changeValue(event: any) {
        props.setValue(event.currentTarget.value);
        if (props.onChange) {
            props.onChange(event);
        }
    }

    function handleFocus(event: any) {
        event.target.select();
    }

    return (
        <TextField
            fullWidth={fullWidth}
            className={className}
            inputProps={{ style: { fontSize: 16 } }}
            onChange={changeValue}
            label={label}
            size="small"
            variant={variant}
            value={value}
            onFocus={handleFocus}
            error={Boolean(!props.isPristine && (props.showRequired || errorMessage))}
            helperText={!props.isPristine && errorMessage}
        />
    );
};

export const InputFormsy = React.memo(withFormsy<OutlinedTextFieldProps, string>(PureInputFormsy));
