import React, { useState, useEffect } from "react";
import { Form, Button, Input } from "antd";
import { LoadingOutlined, CheckOutlined } from "@ant-design/icons";
const Contact = (props) => {
  return (
    <section id="contact">
      <div className="row section-head">
        <div className="row section-head">
          <h1>
            <span>Get in Touch.</span>
          </h1>
        </div>
        <div className="ten columns">
          <p className="lead">
            Here is where you should write your message to readers to have them
            get in contact with you
          </p>
        </div>
      </div>
      <div className="row">
        <div className="eigh columns">
          {/* <Form action="" method="post" id="contactForm" name="contactForm"> */}
          <Form
            id="contactForm"
            action="https://formspree.io/mpzyedqj"
            method="POST"
            name="contactForm"
          >
            <Form.Item
              label="Name"
              htmlFor="contactName"
              rules={[{ required: true }]}
            >
              <Input
                type="text"
                defaultValue=""
                size="35"
                id="contactName"
                name="contactName"
              />
            </Form.Item>
            <Form.Item
              label="Email"
              htmlFor="contactEmail"
              rules={[{ required: true }]}
            >
              <Input
                type="text"
                defaultValue=""
                size="35"
                id="contactEmail"
                name="contactEmail"
              />
            </Form.Item>
            <Form.Item
              label="Subject"
              htmlFor="contactSubject"
              rules={[{ required: true }]}
            >
              <Input
                type="text"
                defaultValue=""
                size="35"
                id="contactSubject"
                name="contactSubject"
              />
            </Form.Item>
            <Form.Item
              label="Message"
              htmlFor="contactMessage"
              rules={[{ required: true }]}
            >
              <Input.TextArea
                cols="50"
                rows="5"
                size="35"
                id="contactMessage"
                name="contactMessage"
              />
            </Form.Item>
            <div>
              <Button className="submit">Submit</Button>
              <span id="image-loader">
                <LoadingOutlined />
              </span>
            </div>
          </Form>

          <div id="message-warning">Error boy</div>
          <div id="message-success">
            <CheckOutlined className="fa fa-check" />
            Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Contact Info</h4>
            <p className="address">
              <font style={{ fontWeight: "bold" }}>Mitchell Reed</font>
              <br />
              10504 Pintail Lane
              <br />
              Indianapolis, Indiana
              <br />
              <span>317-605-7387</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
