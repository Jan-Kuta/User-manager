import React, {useRef} from 'react';
import FormControl, {FormControlProps} from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import {withFormsy} from 'formsy-react';
import {PassDownProps} from "formsy-react/dist/Wrapper";
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import OutlinedInput from "@material-ui/core/OutlinedInput";

type ImportedProps = FormControlProps & { label: string }
type Props = PassDownProps<string> & ImportedProps;

const PureSelectFormsy = (props: Props) => {
    const { errorMessage, fullWidth, label, children } = props;
    const value = props.value || '';
    const inputRef = useRef<HTMLInputElement | null>(null);

    const changeValue = (event: any) => {
        props.setValue(event.target.value);
        if (props.onChange) {
            props.onChange(event);
        }
    };

    return (
        <FormControl
            fullWidth={fullWidth}
            size="small"
            error={Boolean(!props.isPristine && (props.showRequired || errorMessage))}
            className={props.className}
            variant="outlined"
        >
            {props.label && <InputLabel htmlFor={inputRef.current?.id || undefined}>{props.label}</InputLabel>}
            <Select value={value} onChange={changeValue} input={<OutlinedInput labelWidth={label.length * 8} ref={inputRef} />} >
                {children}
            </Select>
            {Boolean(!props.isPristine && errorMessage) && <FormHelperText>{errorMessage}</FormHelperText>}
        </FormControl>
    );
};

export const SelectFormsy = React.memo(withFormsy<ImportedProps, string>(PureSelectFormsy));
