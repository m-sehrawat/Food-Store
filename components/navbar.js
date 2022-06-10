async function navigationBar() {
    return (
        `<nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid" id="navItems">
                <a class="navbar-brand" href="../index.html">Food Store</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-link" href="../html/food.html">Food</a> &ensp;
                        <a class="nav-link" href="../html/trending.html">Trending</a> &ensp;
                        <a class="nav-link" href="../html/search.html">Search</a> &ensp;
                        <a class="nav-link" href="../html/cart.html">Cart</a> 
                        <a class="nav-link" href="../html/login.html">Login</a> 
                    </div>
                </div>
            </div>
        </nav>`
    )
}

export default navigationBar;