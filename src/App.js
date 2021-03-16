import React, { useState } from "react";
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
  DropdownButton,
  Navbar,
  Nav,
  NavDropdown
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
// randon JSON data generated: https://next.json-generator.com/EJDuqBlx5
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

/*
// turn into component and add prop for custom function eg. deleteBlock
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
);*/
let ButtonEditPopover = () => {
  return (
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
};
let MainNavbar = () => {
  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Brand href="#home">tagResume</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#resumes">my resumes</Nav.Link>
          <Nav.Link href="#edit" active>
            edit
          </Nav.Link>
          <NavDropdown title="more" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">preferences</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
class Resume extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headings: resumeData.resume
    };
    this.addHeading = this.addHeading.bind(this);
    this.deleteHeading = this.deleteHeading.bind(this);
  }
  addHeading() {
    const emptyHeading = {
      heading: "heading title",
      blocks: [
        {
          tags: [],
          sections: [{ title: "add title", desc: "add desc" }]
        }
      ]
    };
    this.setState((state) => ({
      headings: state.headings.concat(emptyHeading)
    }));
    console.log("addHeading");
  }
  // BROKEN
  deleteHeading(index) {
    this.setState((state) => ({
      headings: state.headings.splice(index, 1) //bug is NOT from index
    }));
    console.log("delHeading");
  }
  render() {
    const headingList = [];
    this.state.headings.forEach((heading, i) => {
      headingList.push(
        <Heading
          headingData={heading}
          index={i}
          del={() => this.deleteHeading(i)}
        />
      );
    });
    return (
      <Container fluid className="p-2">
        <MainNavbar />
        <h1>edit your details</h1>
        {headingList}
        <Button variant="light" size="md" onClick={this.addHeading}>
          + <i>add heading</i>
        </Button>
      </Container>
    );
  }
}
class Heading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.headingData.heading,
      blocks: this.props.headingData.blocks
    };
    this.addBlock = this.addBlock.bind(this);
    this.deleteBlock = this.deleteBlock.bind(this);
  }
  addBlock() {
    const emptyBlock = {
      tags: [],
      sections: [{ title: "add title", desc: "add desc" }]
    };
    this.setState((state) => ({
      blocks: state.blocks.concat(emptyBlock) // fixed by adjusting states to be more specific?
    }));
    console.log(this.state.blocks);
    console.log("addBlock");
  }
  // broken: same bug as deleteHeading
  deleteBlock(index) {
    this.setState((state) => ({
      blocks: state.blocks.splice(index, 1)
    }));
    console.log("delBlock");
  }
  render() {
    const blockList = [];
    this.state.blocks.forEach((block) => {
      //bug: forEach being read as a property
      // add key prop
      blockList.push(<Block blockData={block} del={this.deleteBlock} />);
    });
    return (
      <Container fluid className="p-1">
        <Card>
          <Card.Body>
            <Row>
              <Col xs={10}>
                <EditSectionDropdown
                  title={this.state.title}
                  del={this.props.del}
                />
              </Col>
              <Col>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={this.props.del}
                >
                  x
                </Button>
              </Col>
            </Row>
            {blockList}
            <Row className="p-2">
              <Button variant="light" size="md" onClick={this.addBlock}>
                + <i>add block</i>
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
class AddBlockTagMenu extends React.Component {
  render() {
    /*
    tags: {
    C: 0,
    Unity: 1,
    Retail: 2,
    JavaScript: 3,
    "C++": 4,
    "Game Dev": 5,
    "Front-End": 6
  },
    */
    const tags = (
      <div>
        <Dropdown.Item>
          <Button variant={buttonColors[0]} size="sm">
            C
          </Button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Button variant={buttonColors[1]} size="sm">
            C++
          </Button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Button variant={buttonColors[2]} size="sm">
            Unity
          </Button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Button variant={buttonColors[3]} size="sm">
            Retail
          </Button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Button variant={buttonColors[4]} size="sm">
            JavaScript
          </Button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Button variant={buttonColors[5]} size="sm">
            C++
          </Button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Button variant={buttonColors[6]} size="sm">
            Game Dev
          </Button>
        </Dropdown.Item>
        <Dropdown.Item>
          <Button variant={buttonColors[7]} size="sm">
            Front-End
          </Button>
        </Dropdown.Item>
      </div>
    );
    /* foreach doesnt work for this either
    this.props.tags.forEach((t) => {
      tags.push(
        <Row className="p-1">
          <Button size="sm" variant={buttonColors[t[1]]}>
            {t[0]}
          </Button>
        </Row>
      );
    });
    */
    // https://react-bootstrap.github.io/components/dropdowns/#customization
    // forwardRef again here!
    // Dropdown needs access to the DOM of the Menu to measure it
    const CustomMenu = React.forwardRef(
      ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
        const [value, setValue] = useState("");
        return (
          <div
            ref={ref}
            style={style}
            className={className}
            aria-labelledby={labeledBy}
          >
            <FormControl
              autoFocus
              className="mx-3 my-2 w-auto"
              placeholder="Type to filter..."
              onChange={(e) => setValue(e.target.value)}
              value={value}
            />
            <ul className="list-unstyled">
              {React.Children.toArray(children).filter(
                (child) =>
                  !value || child.props.children.toLowerCase().startsWith(value)
              )}
            </ul>
          </div>
        );
      }
    );
    return (
      <Dropdown>
        <Dropdown.Toggle variant="light" size="sm" className="py-1">
          + <i>add tag</i>
        </Dropdown.Toggle>
        <Dropdown.Menu as={CustomMenu}>{tags}</Dropdown.Menu>
      </Dropdown>
    );
  }
}
class Block extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: this.props.blockData.tags,
      sections: this.props.blockData.sections
    };
    this.addSection = this.addSection.bind(this);
    this.deleteSection = this.deleteSection.bind(this);
  }
  addSection() {
    const emptySection = { title: "stuff", desc: "add desc here" };
    this.setState((state) => ({
      sections: state.sections.concat(emptySection) // must be something here and in the last foreach bug
    }));
    console.log(this.props.sections);
    console.log("addSection");
  }
  deleteSection(index) {
    this.setState((state) => ({
      heading: state.sections.splice(index, 1)
    }));
    console.log("delSection");
  }
  render() {
    const tags = [];
    const sections = [];
    this.state.tags.forEach((tag) => {
      tags.push(
        // add key prop
        <BlockTag text={tag} color={buttonColors[resumeData.tags[tag]]} />
      );
    });
    this.state.sections.forEach((section, i) => {
      sections.push(
        // add key prop
        <ListGroup.Item className="border border-0">
          <Section
            title={section.title}
            desc={section.desc}
            del={() => this.deleteSection(i)}
          />
        </ListGroup.Item>
      );
    });
    sections.push(
      <ListGroup.Item className="border border-0 align-self-start">
        <Button variant="light" size="sm" onClick={this.addSection}>
          + <i>add section</i>
        </Button>
      </ListGroup.Item>
    );
    /*
    {this.state.block.sections.map(
      ({ title, desc }, index) => {
        // turn into pushed list?
        return (
          <ListGroup.Item className="border border-0">
            <Section title={title} desc={desc} />
          </ListGroup.Item>
        );
      }
    )}
    <ListGroup.Item className="border border-0 align-self-start">
      <Button variant="light" size="sm">
        +
      </Button>
    </ListGroup.Item> */
    // https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/#step-3-saving-list-order-after-reordering-items-with-react-beautiful-dnd
    return (
      <Row>
        <Col xs={1} className="align-self-center p-0">
          <Button variant="outline-danger" size="sm" onClick={this.props.del}>
            x
          </Button>
        </Col>
        <Col className="p-1">
          <Card>
            <Form>
              <Form.Row>
                <Col className="d-flex align-content-start flex-wrap">
                  {tags}
                  <AddBlockTagMenu />
                </Col>
                <Col sm={10}>
                  <Container>
                    <ListGroup>{sections}</ListGroup>
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
function EditSectionDropdown(props) {
  return (
    <DropdownButton variant="light" title={props.title} size="sm">
      <Dropdown.Item href="#/rename" disabled="true">
        <FormControl placeholder="rename..." />
      </Dropdown.Item>
      <Dropdown.Item href="#/delete">
        <Button variant="danger" size="sm" onClick={props.del}>
          delete
        </Button>
      </Dropdown.Item>
    </DropdownButton>
  );
}
class Section extends React.Component {
  render() {
    const title = this.props.title;
    const desc = this.props.desc;
    //desc: add an OnChange in Form.Control and assign to a function modifying JSON state
    //title: edit titles without making the button a form
    /*<Button variant="light" size="sm" onClick={this.props.del}>
                    {title}
                  </Button> */
    return (
      <Form>
        <InputGroup>
          <Row>
            <Col xs={4} className="text-right">
              <EditSectionDropdown title={title} del={this.props.del} />
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
