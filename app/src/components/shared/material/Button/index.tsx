import React from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import useStyles from './styles'
import getStyleClassName from '../../../../utils/getStyleClassName';

interface CustomButtonProps extends ButtonProps {
  customProp?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ customProp, children, ...props }) => {
  const { classes, cx } = useStyles()
  const buttonClassName = cx(
    classes.button,
    props.variant && getStyleClassName(classes, props.variant)
  )
  return (
    <Button disableElevation className={buttonClassName} {...props}>
      { children || 'Custom Button'}
    </Button>
  );
};

export default CustomButton;
