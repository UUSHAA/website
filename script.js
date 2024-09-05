body {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    background: linear-gradient(45deg, #ffb703, #023047);
    scroll-behavior: smooth;
    color: #333;
}

header {
    background: linear-gradient(135deg, #00c6ff, #0072ff);
    color: #fff;
    padding: 50px;
    text-align: center;
    position: relative;
    overflow: hidden;
}

header h1, header p, a.btn {
    animation: fadeInUp 2s ease-in-out;
}

a {
    color: #fff;
    text-decoration: none;
}

a.btn {
    background-color: #ffb703;
    color: #000;
    padding: 10px 20px;
    font-weight: bold;
    border-radius: 30px;
    transition: transform 0.5s ease-in-out, background-color 0.3s;
}

a.btn:hover {
    background-color: #023047;
    transform: rotate(360deg);
}

section {
    padding: 50px;
    margin: 30px 0;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    opacity: 0;
    transform: translateY(50px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

section h2 {
    font-size: 2.5em;
    color: #0072ff;
    border-bottom: 2px solid #0072ff;
    margin-bottom: 20px;
    animation: slideInFromLeft 1.5s ease-in-out;
}

ul {
    list-style-type: none;
    padding: 0;
}

ul li {
    background-color: #f4f4f4;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out;
}

ul li:hover {
    background-color: #ffb703;
    color: #fff;
}

footer {
    background: #023047;
    color: #fff;
    text-align: center;
    padding: 20px;
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.2);
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes slideInFromLeft {
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
}

.fade-in {
    opacity: 1;
    transform: translateY(0);
}
