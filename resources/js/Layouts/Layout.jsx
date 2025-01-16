const Layout = ({children}) => {
    return(
        <main>
            <div className="home-card">
                {children}
            </div>
        </main>
    )
}

export default Layout;