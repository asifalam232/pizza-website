import React from "react";
import { Container, Row, Col, Table, Image } from "react-bootstrap";
import { AiFillPhone } from "react-icons/ai";
import { ImMobile } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  return (
    <>
      <Container style={{ marginTop: "50px" }}>
        <Row>
          <Col md={6}>
            <h1>Asif's pizza shop</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
              lacus eleifend enim consequat ultrices ac eget nibh. Sed interdum
              tortor gravida mauris porttitor, sit amet sodales nisl placerat.
              Praesent porta pulvinar nisl, ac tristique dui semper et. Donec
              convallis purus non metus dictum, eu vehicula lorem fringilla.
              Aliquam dapibus suscipit felis, non iaculis justo vulputate in. Ut
              ac nunc posuere, finibus tellus at, elementum dolor. In dictum ac
              erat eu tempor. Maecenas eu eros in nisl varius tempus at luctus
              quam. Proin aliquam ultrices purus sit amet sollicitudin. Etiam in
              risus dolor. Nam pretium dolor faucibus, porttitor libero eget,
              egestas nisi. Nulla facilisi. Maecenas eget finibus eros. Morbi
              cursus eros nisl, at sodales massa rhoncus id. Etiam at arcu
              vehicula risus dictum dignissim nec quis sem. Integer eu mauris
              viverra dolor ornare tristique. Quisque convallis, ipsum et
              maximus sagittis, diam felis tempor erat, a pulvinar nunc magna
              eget neque. Donec venenatis mauris ipsum, venenatis accumsan
              mauris dignissim non. Ut aliquam imperdiet erat a mattis. Nulla id
              odio orci. Fusce vel orci a metus lacinia rhoncus sed non turpis.
              Aenean aliquam ex ac velit feugiat, eget pulvinar diam aliquet. In
              leo nisi, dignissim non velit id, dictum porta tortor. Sed.
            </p>
            <Table striped bordered hover className={"text-center"}>
              <thead>
                <tr>
                  <th className={"bg-warning text-center"} colSpan={3}>
                    --- Contact Details ---
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <AiFillPhone />
                  </td>
                  <td>Phone</td>
                  <td>0123-456789</td>
                </tr>
                <tr>
                  <td>
                    <ImMobile />
                  </td>
                  <td>Call</td>
                  <td>0123456789</td>
                </tr>
                <tr>
                  <td>
                    <HiOutlineMail />
                  </td>
                  <td>Email</td>
                  <td>Help@example.org</td>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image src={"images/farmhouse.jpg"} style={{ width: "100%" }} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
