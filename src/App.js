import React from "react";
import {
  Row,
  Col,
  Container,
  Card,
  ListGroup,
  Button,
  Form,
  FormControl,
  InputGroup,
  Popover,
  OverlayTrigger,
  Dropdown,
  DropdownButton
} from "react-bootstrap";
//import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

const buttonColors = [
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
  "info",
  "dark"
];
const resumeData = {
  tags: {
    C: 0,
    Unity: 1,
    Retail: 2,
    JavaScript: 3,
    "C++": 4,
    "Game Dev": 5,
    "Front-End": 6
  },
  resume: [
    {
      heading: "profile",
      blocks: [
        {
          tags: [],
          sections: [
            {
              title: "name",
              desc: "Carver Rodriquez"
            },
            {
              title: "title",
              desc: "deserunt enim"
            },
            {
              title: "summary",
              desc:
                "Ex officia laborum nisi occaecat ipsum. Commodo sunt amet occaecat elit nostrud pariatur incididunt duis id incididunt non consequat."
            },
            {
              title: "contact",
              desc: "example@email.com"
            }
          ]
        }
      ]
    },
    {
      heading: "education",
      blocks: [
        {
          tags: [],
          sections: [
            {
              title: "school",
              desc: "Ronbert University"
            },
            {
              title: "degree",
              desc: "B.A., cupidatat sint"
            },
            {
              title: "date",
              desc: "Aug 1983 - Feb 2009"
            },
            {
              title: "desc",
              desc:
                "Excepteur nisi fugiat sunt duis ut ipsum. Exercitation adipisicing nostrud nisi Lorem nulla magna eiusmod fugiat consequat cillum."
            }
          ]
        },
        {
          tags: [],
          sections: [
            {
              title: "school",
              desc: "Biflex University"
            },
            {
              title: "degree",
              desc: "B.A., et veniam"
            },
            {
              title: "date",
              desc: "Jan 1971 - Apr 2003"
            },
            {
              title: "desc",
              desc:
                "Aliquip nulla excepteur cupidatat fugiat mollit velit do minim qui veniam veniam. Laborum laborum velit aliquip minim Lorem magna labore adipisicing tempor consequat ea."
            }
          ]
        }
      ]
    },
    {
      heading: "experience",
      blocks: [
        {
          tags: [
            "Unity",
            "C",
            "Retail",
            "JavaScript",
            "C++",
            "Game Dev",
            "Front-End"
          ],
          sections: [
            {
              title: "title",
              desc: "laborum do"
            },
            {
              title: "group",
              desc: "Tellifly Inc."
            },
            {
              title: "date",
              desc: "Mar 2011 - Jun 1995"
            },
            {
              title: "desc",
              desc:
                "Anim anim tempor enim cupidatat nulla mollit et do aliqua laboris. Sit amet dolore est deserunt sint magna elit enim Lorem."
            }
          ]
        },
        {
          tags: [
            "Unity",
            "C",
            "Retail",
            "JavaScript",
            "C++",
            "Game Dev",
            "Front-End"
          ],
          sections: [
            {
              title: "title",
              desc: "ex esse"
            },
            {
              title: "group",
              desc: "Liquicom Inc."
            },
            {
              title: "date",
              desc: "Jul 2011 - Jul 1988"
            },
            {
              title: "desc",
              desc:
                "Excepteur velit ipsum Lorem fugiat veniam sint aliqua tempor. Pariatur culpa officia mollit nulla dolore veniam consequat eiusmod adipisicing esse magna."
            }
          ]
        },
        {
          tags: [
            "Unity",
            "C",
            "Retail",
            "JavaScript",
            "C++",
            "Game Dev",
            "Front-End"
          ],
          sections: [
            {
              title: "title",
              desc: "minim consequat"
            },
            {
              title: "group",
              desc: "Conferia Inc."
            },
            {
              title: "date",
              desc: "Nov 1982 - May 2016"
            },
            {
              title: "desc",
              desc:
                "Labore tempor magna incididunt nisi nulla eiusmod ullamco occaecat. Labore cupidatat officia esse labore sunt minim commodo duis quis cillum fugiat deserunt anim."
            }
          ]
        },
        {
          tags: [
            "Unity",
            "C",
            "Retail",
            "JavaScript",
            "C++",
            "Game Dev",
            "Front-End"
          ],
          sections: [
            {
              title: "title",
              desc: "duis culpa"
            },
            {
              title: "group",
              desc: "Isoternia Inc."
            },
            {
              title: "date",
              desc: "Jul 1986 - Jan 1977"
            },
            {
              title: "desc",
              desc:
                "Officia tempor nulla enim laborum ipsum mollit duis consectetur consequat duis anim. Cupidatat nostrud consectetur nisi officia dolore quis anim aliqua in sint reprehenderit laboris consequat magna."
            }
          ]
        },
        {
          tags: [
            "Unity",
            "C",
            "Retail",
            "JavaScript",
            "C++",
            "Game Dev",
            "Front-End"
          ],
          sections: [
            {
              title: "title",
              desc: "commodo aute"
            },
            {
              title: "group",
              desc: "Temorak Inc."
            },
            {
              title: "date",
              desc: "May 1988 - Jan 2002"
            },
            {
              title: "desc",
              desc:
                "Irure do et occaecat proident adipisicing eu est officia exercitation. Irure culpa proident officia sint."
            }
          ]
        }
      ]
    },
    {
      heading: "projects",
      blocks: [
        {
          tags: [
            "Unity",
            "C",
            "Retail",
            "JavaScript",
            "C++",
            "Game Dev",
            "Front-End"
          ],
          sections: [
            {
              title: "title",
              desc: "ullamco sit"
            },
            {
              title: "date",
              desc: "Jan 1971 - Jul 1974"
            },
            {
              title: "desc",
              desc:
                "Sunt ad ut amet veniam cillum ut sunt enim nulla officia nulla et nostrud incididunt. Qui duis deserunt cupidatat nisi magna duis excepteur minim pariatur cupidatat proident."
            }
          ]
        },
        {
          tags: [
            "Unity",
            "C",
            "Retail",
            "JavaScript",
            "C++",
            "Game Dev",
            "Front-End"
          ],
          sections: [
            {
              title: "title",
              desc: "proident cillum"
            },
            {
              title: "date",
              desc: "Feb 2014 - May 1970"
            },
            {
              title: "desc",
              desc:
                "Dolore veniam qui quis pariatur ullamco occaecat excepteur aute officia cillum elit consectetur. Dolore enim occaecat adipisicing nulla velit."
            }
          ]
        },
        {
          tags: [
            "Unity",
            "C",
            "Retail",
            "JavaScript",
            "C++",
            "Game Dev",
            "Front-End"
          ],
          sections: [
            {
              title: "title",
              desc: "esse ullamco"
            },
            {
              title: "date",
              desc: "Apr 2003 - Mar 1977"
            },
            {
              title: "desc",
              desc:
                "Aute minim laboris aliqua voluptate consectetur id nulla ullamco. Non cupidatat non exercitation sit aliqua aute proident cupidatat nulla nisi."
            }
          ]
        },
        {
          tags: [
            "Unity",
            "C",
            "Retail",
            "JavaScript",
            "C++",
            "Game Dev",
            "Front-End"
          ],
          sections: [
            {
              title: "title",
              desc: "laborum cillum"
            },
            {
              title: "date",
              desc: "Oct 1991 - Aug 1986"
            },
            {
              title: "desc",
              desc:
                "Deserunt velit pariatur officia dolore veniam ex dolore nulla irure laborum aliqua. Veniam cupidatat non eu voluptate sint fugiat enim duis amet ut."
            }
          ]
        }
      ]
    },
    {
      heading: "skills",
      blocks: [
        {
          tags: [
            "Unity",
            "C",
            "Retail",
            "JavaScript",
            "C++",
            "Game Dev",
            "Front-End"
          ],
          sections: []
        }
      ]
    }
  ]
};

const ButtonEditPopover = (
  <Popover>
    <Popover.Content>
      <ListGroup>
        <ListGroup.Item className="border border-0">
          <FormControl placeholder="rename..." />
        </ListGroup.Item>
        <ListGroup.Item className="border border-0">
          <Button variant="danger" size="sm">
            delete
          </Button>
        </ListGroup.Item>
      </ListGroup>
    </Popover.Content>
  </Popover>
);

class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resumeJSON: resumeData.resume
    };
  }
  updateResume(temp) {
    this.setState({ resumeJSON: temp });
  }
  addHeading(tempResume) {
    const emptyHeading = {
      heading: "heading title",
      blocks: [
        {
          tags: [],
          sections: [{ title: "add title", desc: "add desc" }]
        }
      ]
    };
    tempResume.push(emptyHeading);
    this.updateResume(tempResume);
  }
  render() {
    console.log(this.state.resumeJSON);
    const headings = [];
    this.state.resumeJSON.forEach((heading, i) => {
      headings.push(<Heading headingData={heading} index={heading.heading} />);
    });
    return (
      <Container fluid className="p-2">
        <h1>resume</h1>
        {headings}
        <Button variant="light" size="md">
          add heading +
        </Button>
      </Container>
    );
  }
}

class Heading extends React.Component {
  render() {
    const heading = this.props.headingData;
    const blocks = [];
    heading.blocks.forEach((block) => {
      // add key prop
      blocks.push(<Block blockData={block} />);
    });
    return (
      <Container fluid className="p-1">
        <Card>
          <Card.Body>
            <Row>
              <Col xs={10}>
                <h2 id={this.props.index}>{heading.heading}</h2>
              </Col>
              <Col>
                <Button variant="outline-danger" size="sm">
                  x
                </Button>
              </Col>
            </Row>
            {blocks}
            <Row className="p-2">
              <Button variant="light" size="md">
                add block +
              </Button>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
class BlockTag extends React.Component {
  render() {
    const text = this.props.text;
    const color = this.props.color;
    return (
      <Row className="p-1">
        <Container>
          <OverlayTrigger
            trigger="click"
            placement="right"
            overlay={ButtonEditPopover}
          >
            <Button variant={color} size="sm" className="py-1">
              {text}
            </Button>
          </OverlayTrigger>
        </Container>
      </Row>
    );
  }
}
const AddPopover = ({ tags }) => (
  <Popover>
    <Popover.Content>
      <Container>{tags}</Container>
    </Popover.Content>
  </Popover>
);
class AddBlockTagButton extends React.Component {
  render() {
    /*
    // show current tags
    //const ref = React.createRef();
    const tags = [];
    resumeData.tags.forEach((t) => {
      tags.push(
        <Row className="p-1">
          <Button size="sm" variant={buttonColors[t[1]]}>
            {t[0]}
          </Button>
        </Row>
      );
    });
    <OverlayTrigger
            trigger="click"
            placement="right"
            overlay={<AddPopover tags={tags} />}
          >

          </OverlayTrigger>
    */
    return (
      <Row className="p-1">
        <Container>
          <OverlayTrigger
            trigger="click"
            placement="right"
            overlay={ButtonEditPopover}
          >
            <Button variant="light" size="sm" className="py-1">
              +
            </Button>
          </OverlayTrigger>
        </Container>
      </Row>
    );
  }
}
class Block extends React.Component {
  render() {
    const block = this.props.blockData;
    const tags = [];
    block.tags.forEach((tag) => {
      tags.push(
        // add key prop
        <BlockTag text={tag} color={buttonColors[resumeData.tags[tag]]} />
      );
    });
    // https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/#step-3-saving-list-order-after-reordering-items-with-react-beautiful-dnd
    return (
      <Row>
        <Col xs={1} className="align-self-center p-0">
          <Button variant="outline-danger" size="sm">
            x
          </Button>
        </Col>
        <Col className="p-1">
          <Card>
            <Form>
              <Form.Row>
                <Col className="d-flex align-content-start flex-wrap">
                  {tags}
                  <AddBlockTagButton />
                </Col>
                <Col sm={10}>
                  <Container>
                    <ListGroup>
                      {block.sections.map(({ title, desc }, index) => {
                        return (
                          <ListGroup.Item className="border border-0">
                            <Section title={title} desc={desc} />
                          </ListGroup.Item>
                        );
                      })}
                      <ListGroup.Item className="border border-0 align-self-start">
                        <Button variant="light" size="sm">
                          +
                        </Button>
                      </ListGroup.Item>
                    </ListGroup>
                  </Container>
                </Col>
              </Form.Row>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}
class Section extends React.Component {
  render() {
    const title = this.props.title;
    const desc = this.props.desc;
    //desc: add an OnChange in Form.Control and assign to a function modifying JSON state
    //title: edit titles without making the button a form
    return (
      <Form>
        <InputGroup>
          <Row>
            <Col xs={4} className="text-right">
              <Form.Label>
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  overlay={ButtonEditPopover}
                >
                  <Button variant="light" size="sm">
                    {title}
                  </Button>
                </OverlayTrigger>
              </Form.Label>
            </Col>
            <Col xs={8}>
              <Form.Control
                as="textarea"
                rows={1}
                plaintext
                defaultValue={desc}
              />
            </Col>
          </Row>
        </InputGroup>
      </Form>
    );
  }
}
export default function App() {
  return (
    <div className="App">
      <Resume />
    </div>
  );
}
