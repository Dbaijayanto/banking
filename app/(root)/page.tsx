
import HeaderBox from '@/components/ui/HeaderBox'
import RightSideBar from '@/components/ui/RightSideBar'
import RightSideBr from '@/components/ui/RightSideBar'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'


type Props = {}

const Home = (props: Props) => {
  const loggedIn = { firstName: 'user', lastName:'account',
    email: 'contact@jsmastery.pro'
  }

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext = "Access and manage your account 
            and transaction efficiently"
          />

          <TotalBalanceBox
            accouts={[]}
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