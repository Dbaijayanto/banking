
import HeaderBox from '@/components/ui/HeaderBox'
import RightSideBar from '@/components/ui/RightSideBar'
import RightSideBr from '@/components/ui/RightSideBar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'
import { getLoggedInUser } from '@/lib/actions/user.action'


type Props = {}

const Home =  () => {
  const loggedIn = {firstName:'USER',lastName:'',
    email:'contact@gmail.com'};


  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext = "Access and manage your account and transaction efficiently"
          />

          <TotalBalanceBox
            accounts={[]}
              totalBanks={1}
              totalCurrentBalance={1250.35}
            
          
          />
        </header>

        RECENT TRANSACTIONS
      </div>

      <RightSideBar 
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:123.50},{currentBalance:500.75}]}
      />
    </section>
  )
}

export default Home