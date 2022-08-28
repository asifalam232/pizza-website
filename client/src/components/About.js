import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <h1>Who we are</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl
          eros, pulvinar facilisis justo mollis, auctor consequat urna. Morbi a
          bibendum metus. Donec scelerisque sollicitudin enim eu venenatis. Duis
          tincidunt laoreet ex, in pretium orci vestibulum eget. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum
          lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer eu nibh
          at nisi ullamcorper sagittis id vel leo. Integer feugiat faucibus
          libero, at maximus nisl suscipit posuere. Morbi nec enim nunc.
          Phasellus bibendum turpis ut ipsum egestas, sed sollicitudin elit
          convallis. Cras pharetra mi tristique sapien vestibulum lobortis. Nam
          eget bibendum metus, non dictum mauris. Nulla at tellus sagittis,
          viverra est a, bibendum metus.
        </p>
        <h1>Our Speciality</h1>
        <Row>
          <Col md={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              tortor augue, lobortis eget mi ut, varius porttitor enim.
              Phasellus sit amet eros molestie, cursus mauris nec, venenatis mi.
              Aenean fringilla molestie turpis, id euismod lorem molestie sit
              amet. Nulla facilisi. Maecenas sed arcu ultricies mauris tincidunt
              varius eget nec risus. Donec sodales sagittis libero, vitae
              consequat felis maximus at. Sed sed consequat mi. Suspendisse ut
              dui quis nunc varius condimentum. Aliquam eget quam in quam rutrum
              ultricies et ut turpis. Phasellus imperdiet vitae mi id sagittis.
              Donec felis velit, vehicula eget nibh nec, placerat iaculis ex.
              Fusce convallis massa velit.
            </p>
          </Col>
          <Col md={6}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              tortor augue, lobortis eget mi ut, varius porttitor enim.
              Phasellus sit amet eros molestie, cursus mauris nec, venenatis mi.
              Aenean fringilla molestie turpis, id euismod lorem molestie sit
              amet. Nulla facilisi. Maecenas sed arcu ultricies mauris tincidunt
              varius eget nec risus. Donec sodales sagittis libero, vitae
              consequat felis maximus at. Sed sed consequat mi. Suspendisse ut
              dui quis nunc varius condimentum. Aliquam eget quam in quam rutrum
              ultricies et ut turpis. Phasellus imperdiet vitae mi id sagittis.
              Donec felis velit, vehicula eget nibh nec, placerat iaculis ex.
              Fusce convallis massa velit.
            </p>
          </Col>
        </Row>
        <Row>
          <h1>Our Chief</h1>
          <Col md={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at
            semper libero, vitae efficitur turpis. Integer at nisl ac sapien
            congue euismod. Sed mattis, nibh id convallis aliquam, magna risus
            posuere orci, feugiat maximus velit justo nec nisi. Nullam auctor
            elementum sem a cursus. Nulla vel sem tempus, commodo nisi.
          </Col>
          <Col md={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at
            semper libero, vitae efficitur turpis. Integer at nisl ac sapien
            congue euismod. Sed mattis, nibh id convallis aliquam, magna risus
            posuere orci, feugiat maximus velit justo nec nisi. Nullam auctor
            elementum sem a cursus. Nulla vel sem tempus, commodo nisi.
          </Col>
          <Col md={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at
            semper libero, vitae efficitur turpis. Integer at nisl ac sapien
            congue euismod. Sed mattis, nibh id convallis aliquam, magna risus
            posuere orci, feugiat maximus velit justo nec nisi. Nullam auctor
            elementum sem a cursus. Nulla vel sem tempus, commodo nisi.
          </Col>
          <Col md={3}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at
            semper libero, vitae efficitur turpis. Integer at nisl ac sapien
            congue euismod. Sed mattis, nibh id convallis aliquam, magna risus
            posuere orci, feugiat maximus velit justo nec nisi. Nullam auctor
            elementum sem a cursus. Nulla vel sem tempus, commodo nisi.
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
