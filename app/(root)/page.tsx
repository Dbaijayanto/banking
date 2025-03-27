
import HeaderBox from '@/components/ui/HeaderBox'
import TotalBalanceBox from '@/components/ui/TotalBalanceBox'


type Props = {}

const Home = (props: Props) => {
  const loggedIn = { firstName: 'user'}

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
      </div>
    </section>
  )
}

export default Home