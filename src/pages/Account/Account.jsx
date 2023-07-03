import React from 'react'
import Navigator from '../Component/Navigator/Navigator'
import Women from '../StartExploring/Women/Women'
import TrendMan from '../Trending/ManTrend/TrendMan'
import "./Account.scss"
import AccountForm from './AccountForm/AccountForm'
import Changebilling from './Changebilling/Changebilling'
import Changepassword from './Changepassword/Changepassword'
import WishList from '../Component/WishList'
const Account = () => {
  return (
      <div className='account container-fluid '>
          <div className="container d-flex justify-content-center">
              <div className="account-section w-75 " >
                  <div className="title d-flex flex-column">
                      <strong>Account</strong>
                      <span className='text-muted'>Enrio Case , enriop@gmail.com . los Angles</span>
                  </div>
                  <div className='account-navigation'>
                      <div className='container '>
                          <Navigator className="text-muted" toggle1={<AccountForm />} toggle4={<Changepassword />} toggle5={ <Changebilling/>} toggle2={<WishList />} item1={"Account info"} item2="Save Lists" item3={"My order"} item4="change password" item5={"Change Billing"} />
                      </div>
                    </div>
              </div>
          </div>
          <hr />
    </div>
  )
}

export default Account