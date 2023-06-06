import React, {useState, useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import { AiFillEdit, AiFillCloseCircle } from "react-icons/ai";
import EditCurrentUserDetails from './EditCurrentUserDetails';
import DisplayCurrentTransaction from '../../Modal/DisplayCurrentTransaction';
import EditBalance from './EditBalance';
import EditUserPassword from './EditUserPassword';
import DisabledUser from './DisabledUser';
import EditDiscount from './EditDiscount';
import Modal from '../../Modal/Modal';
// import AdminTable from '../../Table/AdminTable';
const EditCurrentUser = ({user, setIsFetch,setIsVisibleEdit}) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const { t } = useTranslation();

    const handleCloseModal = () => {
        setModalIsOpen(false);
      };

      const handleOpenModal = () => {
        setModalIsOpen(true);
      };
    

    return (
      <div className='edit_user_item_wrap'>
        <div className='edit_user_data'>
          <button 
          className='close_user' 
          onClick={() => setIsVisibleEdit(state => !state)}
          >
            Х
          </button>
          <div className='data_item user_info_edit'>
            <EditCurrentUserDetails
              data={user.name}
              userId={user._id}
              editPath={"https://ponto-print.herokuapp.com/update-name"}
              title={t(`Name`)}
              setIsFetch={setIsFetch}
            />
            <EditCurrentUserDetails
            data={user.email}
            userId={user._id}
            editPath={""}
            title={t(`Mail`)}
            setIsFetch={setIsFetch}
            />
            <EditUserPassword
            userId={user._id}
            editPath={"https://ponto-print.herokuapp.com/update-password"}
            title={t(`Password change`)}
            setIsFetch={setIsFetch}
            />
          </div>
          <div className='data_item user_info_balance'>
            <EditBalance
              data={user.balance.toFixed(0)}
              userId={user._id}
              editPath={"https://ponto-print.herokuapp.com/update-balance"}
              title={t(`Balance`)}
              setIsFetch={setIsFetch}
            />
            <EditDiscount
              data={user.discountValue}
              userId={user._id}
              editPath={"https://ponto-print.herokuapp.com/update-discount"}
              title={t(`Discount`)}
              setIsFetch={setIsFetch}
            />
            <DisabledUser
            user={user}
            title={t(`Block user`)}
            editPath={"https://ponto-print.herokuapp.com/update-user-status"}
            setIsFetch={setIsFetch}/>
          </div>
        </div>


        {/* <button className="button_open_history" onClick={handleOpenModal}>
          Історія транзакцій
        </button> */}

        {/* <Modal
          isOpen={false}
          onClose={handleCloseModal}
          historyData={user.balanceHistory}
        /> */}

        
        <div className='history_wrap'>
          <div className="history_wrap_header">
            <p>{t(`Date`)}</p>
            <p>{t(`Operation`)}</p>
            <p>{t(`Sum`)}</p>
          </div>
          <div className="history_wrap_item">
            {user.balanceHistory.map((transaction) => (
              <DisplayCurrentTransaction 
              key={transaction._id}
              transaction={transaction}/>
            ))}
          </div>
        </div>
        

        {/* <AdminTable
        allOrders={user.orders}/> */}
      </div>
    );
};

export default EditCurrentUser;