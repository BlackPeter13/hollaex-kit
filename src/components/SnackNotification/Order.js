import React from 'react';
import { connect } from 'react-redux';

import { NotificationWraperMobile } from '../Notification/Notification';
import { OrderDisplay, getTitleAndIcon, generateRows } from '../Notification/Order';

const OrderNotification = ({ data: { type, data }, pairs, onClose }) => {
    const notificationProps = getTitleAndIcon(type, data);
	const rows = generateRows(type, data, pairs);
    return (
        <NotificationWraperMobile
            {...notificationProps}
            className="trade-notification"
            onClose={onClose}>
            <OrderDisplay rows={rows} />
        </NotificationWraperMobile>
    )
}

const mapStateToProps = state => ({
    pairs: state.app.pairs
});

export default connect(mapStateToProps)(OrderNotification);