import React from 'react';
import FieldGroup from '../FieldGroup';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  HelpBlock,
  Button
} from 'react-bootstrap';

export default function ClassForm(props) {
  const styles = {
    lessonFields: {
      margin: '0'
    },
    lessonBtnContainer: {
      margin: '20px',
      display: 'flex',
      justifyConent: 'center'
    },
    lessonBtn: {
      flex: '1',
      margin: '5px'
    },
    submitBtnContainer: {
      textAlign: 'right'
    }
  };
  return (
    <form onSubmit={props.handleSubmit}>
      <FieldGroup
        name="date"
        val={props.date}
        label="Date"
        help="Format should be yyyy-mm-dd"
        onChange={props.handleChange}
      />
      <FieldGroup
        name="start"
        val={props.start}
        label="Start Time"
        help="Format should be hh:mm in military time"
        onChange={props.handleChange}
      />
      <FieldGroup
        name="end"
        val={props.end}
        label="End Time"
        help="Format should be hh:mm in military time"
        onChange={props.handleChange}
      />
      <FieldGroup
        name="theme"
        val={props.theme}
        label="Theme"
        help="A theme or short title for this class"
        onChange={props.handleChange}
      />
      <FieldGroup
        name="description"
        label="Description"
        componentClass="textarea"
        val={props.description}
        help="Anything you want to say that doesn't fit in the other fields"
        onChange={props.handleChange}
      />
      <FieldGroup
        name="price"
        val={props.price}
        label="Price"
        help="Do not include a dollar sign"
        onChange={props.handleChange}
      />
      {props.lessons.map((lesson, i) => {
        return (
          <FieldGroup
            key={i}
            val={props.lessons[i]}
            name={`lesson ${i}`}
            label={i === 0 ? 'Lessons' : null}
            onChange={props.handleLessonChange}
            style={styles.lessonFields}
          />
        );
      })}
      <div style={styles.lessonBtnContainer}>
        <Button
          type="button"
          bsStyle="success"
          bsSize="sm"
          onClick={props.addLesson}
          style={styles.lessonBtn}
        >
          + Add Lesson
        </Button>
        <Button
          type="button"
          bsStyle="danger"
          bsSize="sm"
          disabled={
            props.lessons.length === 1 ? true : false
          }
          onClick={props.removeLesson}
          style={styles.lessonBtn}
        >
          - Remove Lesson
        </Button>
      </div>
      <div style={styles.submitBtnContainer}>
        <Button type="submit" bsStyle="primary" bsSize="lg">
          Submit
        </Button>
      </div>
    </form>
  );
}
