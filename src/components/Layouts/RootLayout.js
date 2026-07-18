import { Button, Flex, Layout, Space } from "antd";
import Head from "next/head";
import Link from "next/link";
import store from "@/redux/store";
import { logOut } from "@/utilities/sessionHelper";
import React from "react";

const { Header, Content, Footer } = Layout;

const RootLayout = ({ children }) => {
  const { currentUser } = store.getState().auth;

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Layout>
        <Header className="container" style={{ background: "none" }}>
          <Flex className="header-nav" justify="space-between" align="center">
            <div className="app-logo">
              <Link href="/" aria-label="TechRealm AI home">
                TechRealm AI
              </Link>
            </div>
            <div className="nav-item">
              <Space size="middle">
                {currentUser ? (
                  <Space size="middle">
                    <p>
                      Welcome To{" "}
                      <span
                        style={{
                          color: "green",
                          fontSize: "16px",
                          fontWeight: "bold",
                        }}
                      >{`${currentUser?.name?.firstName} ${currentUser?.name?.lastName}`}</span>
                    </p>
                    <Link href="/dashboard">
                      <Button>Dashboard</Button>
                    </Link>
                    <Button onClick={logOut}>Log Out</Button>
                  </Space>
                ) : (
                  <>
                    <Link href="/login">Login</Link>
                    <Link href="/register">Register</Link>
                  </>
                )}
              </Space>
            </div>
          </Flex>
        </Header>
        <Content style={{ height: "90vh", background: "none" }}>
          <div className="container">{children}</div>
        </Content>
      </Layout>
    </>
  );
};

export default RootLayout;
