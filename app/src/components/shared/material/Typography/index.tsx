import React from 'react';
import useStyles from './styles'
import getStyleClassName from '../../../../utils/getStyleClassName';
import Typography, { TypographyProps } from '@mui/material/Typography';

interface CustomTypographyProps extends TypographyProps {
  textColor?: string
  textWeight?: string
}

const CustomTypography: React.FC<CustomTypographyProps> = ({ textColor, textWeight, children, ...props }) => {
  const { classes, cx } = useStyles()
  const buttonClassName = cx(
    props.variant && getStyleClassName(classes, props.variant),
    textColor && getStyleClassName(classes, textColor),
    textWeight && getStyleClassName(classes, textWeight)
  )
  return (
    <Typography className={buttonClassName} {...props}>
      { children || 'Custom Button'}
    </Typography>
  );
};

export default CustomTypography;
