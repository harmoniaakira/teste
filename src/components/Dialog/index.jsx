import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import { Toolbar } from '@material-ui/core';
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import Button from '../Button'
import {
  DialogFullScreenTitle,
  IconButton,
  AppBar
} from './Dialog.styles'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogSlide = ( 
  { 
    open, 
    title, 
    confirmButtonLabel, 
    cancelButtonLabel, 
    onConfirm,
    onCancel,
    handleClose,
    fullScreen,
    children
  } ) => {
  
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      fullScreen={fullScreen}
    >
      {
        fullScreen
          ? <AppBar sx={{ position: 'relative' }}>
              <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  onClick={handleClose}
                  aria-label="close"
                >
                  <ArrowBack />
                </IconButton>
                <DialogFullScreenTitle>
                  {title}
                </DialogFullScreenTitle>
              </Toolbar>
            </AppBar>
          : <DialogTitle>{title}</DialogTitle>
      }
      <DialogContent>
        <DialogContentText id="alert-dialog-slide-description">
          {children}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {
          cancelButtonLabel 
          ? <Button popup handleClick={onCancel}>{cancelButtonLabel}</Button>
          : ""
        }
        <Button popup={!fullScreen} handleClick={onConfirm}>{confirmButtonLabel}</Button>
      </DialogActions>
    </Dialog>
  );
}

DialogSlide.propTypes = {
	open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  confirmButtonLabel: PropTypes.string.isRequired,
  cancelButtonLabel: PropTypes.string,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
  fullScreen: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

DialogSlide.defaultProps = {
	fullScreen: false,
  cancelButtonLabel: "",
  onCancel: null
}

export default memo(DialogSlide);
