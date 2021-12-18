import React from 'react';
import {Card} from 'react-bootstrap';
import { LangContext } from "../lang/LangContext.component";

export default function Header(props) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>
            <LangContext.Consumer>
              {(context) => {
              return (
                <p className="texto">{context.dictionary["turn"]}</p>
              )}
              }
            </LangContext.Consumer>
          </Card.Title>
          <Card.Text>
            {props.text}

          </Card.Text>
        </Card.Body>
      </Card>
    );
    }
