import React from 'react';
import FormControl, {FormControlProps} from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {withFormsy} from 'formsy-react';
import {PassDownProps} from "formsy-react/dist/Wrapper";
import Checkbox from '@material-ui/core/Checkbox';
import FormHelperText from '@material-ui/core/FormHelperText';

type ImportedProps = FormControlProps & { label: string }
type Props = PassDownProps<boolean> & ImportedProps;

export const PureCheckboxFormsy = (props: Props) => {
    const { errorMessage, label } = props;
    const value = props.value || false;

    const changeValue = (event: any) => {
        props.setValue(event.target.checked);
        if (props.onChange) {
            props.onChange(event);
        }
    };

    return (
        <FormControl
            error={Boolean((!props.isPristine && props.showRequired) || errorMessage)}
            className={props.className}
        >
            <FormControlLabel
                control={<Checkbox checked={value} onChange={changeValue} />}
                label={label}
            />
            {Boolean(errorMessage) && <FormHelperText>{errorMessage}</FormHelperText>}
        </FormControl>
    );
};

export const CheckboxFormsy = React.memo(withFormsy<ImportedProps, boolean>(PureCheckboxFormsy));
