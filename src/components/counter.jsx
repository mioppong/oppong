import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Button } from "antd";
import "./index.css";
import logo from "../assets/cyborg.png";
import { Anchor } from "antd";
const { Link } = Anchor;
const { Header, Content, Footer } = Layout;

export default class Counter extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <img src={logo} style={{ height: "100px" }} />
          <div className="name-title">Michael Oppong</div>

          <div className="menu-container">
            <Anchor affix={false}>
              <Link className="menu-text" href="#cool" title="Mobile" />
            </Anchor>

            <Anchor affix={false}>
              <Link className="menu-text" href="#cool" title="IOT" />
            </Anchor>

            <Anchor affix={false}>
              <Link className="menu-text" href="#cool" title="Analytics" />
            </Anchor>
          </div>
        </Header>

        <Content className="about-container" style={{ marginTop: "100px" }}>
          <div className="project-title">About me</div>
          <div
            style={{ background: "#fff", padding: 24, minHeight: 380 }}
          ></div>
        </Content>

        <div className="new-project-section" id="mobile">
          MOBILE
        </div>
        <Content className="project-container" style={{ marginTop: "100px" }}>
          <div className="project-title"></div>
          <div
            style={{ background: "#fff", padding: 24, minHeight: 380 }}
          ></div>
        </Content>

        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              background: "#fff",
              borderRadius: 20,
              padding: 24,
              minHeight: 380,
            }}
          >
            Content
          </div>
        </Content>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
            Content
          </div>
        </Content>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
            Content
          </div>
        </Content>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
          </Breadcrumb>
          <div
            id="michael"
            style={{ background: "#fff", padding: 24, minHeight: 380 }}
          >
            Michael Content
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }} id="cool">
          Created by Michael Oppong
        </Footer>
      </Layout>
    );
  }
}
