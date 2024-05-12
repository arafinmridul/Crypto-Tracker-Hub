import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import Navbar from "./components/Navbar";

const App = () => (
    <div className="app">
        <div className="navbar">
            <Navbar />
        </div>
        <div className="main">
            <Layout>
                <div className="routes"></div>
            </Layout>
            <div className="footer">
                <Typography.Title
                    level={5}
                    style={{ color: "white", textAlign: "center" }}
                >
                    Copyright © 2024
                    <Link to="/">Crypto Tracker</Link> <br />
                    All Rights Reserved.
                </Typography.Title>
                <Space>
                    <Link to="/">Home</Link>
                    <Link to="/exchanges">Exchanges</Link>
                    <Link to="/news">News</Link>
                </Space>
            </div>
        </div>
    </div>
);

export default App;
