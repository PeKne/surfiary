import { ReactElement } from 'react';
import { ControllerProps } from 'react-hook-form';

export type InputContainerProps = {
    children: ReactElement<ControllerProps>;
    title: string;
    errorMessage?: string;
};

export type BaseFormInputProps = Omit<ControllerProps, 'render'> &
    Omit<InputContainerProps, 'children'> & { placeholder: string };
