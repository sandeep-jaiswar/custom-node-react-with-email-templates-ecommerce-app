import React from 'react';
import loadable from '@loadable/component';
import { useDispatch, useSelector } from 'react-redux';
import { hideModal } from '../../actions/modal-actions/modalActions';

const LazyModalComponent = {
    ChooseLocationModal: loadable(() => import('./ChooseLocationModal'))
}

function Modal(props) {
    const { name } = props;
    const dispatch = useDispatch();
    const Modal = LazyModalComponent[name];
    return (
        <div className='lib-modal'>
            <div className='lib-modal-content'>
                <div onClick={() => dispatch(hideModal(name))} className='lib-modal-close'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z" />
                    </svg>
                </div>
                <Modal {...props} />
            </div>
        </div>
    )
}

export default Modal
