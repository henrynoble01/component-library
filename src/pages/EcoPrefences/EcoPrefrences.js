import React, { useState, useEffect } from "react";
import { Label, Table, Button, Input } from "semantic-ui-react";
import data from "../../data.json";
// import "./style.css";

export default function EcoPrefrences() {
  const [records, setRecords] = useState([]);
  const [category, setCategory] = useState([]);

  //   this is the the buttons on the tables
  let prefrenceCategories = [];
  //   this is the array containing the tabl data
  let combinedArray = [];
  const fetchPrefrences = () => {
    let response = data.result;
    sortPrefrences(response);
  };

  const sortPrefrences = (prefrences) => {
    let categoryType;

    for (let i = 0; i < prefrences.length; i++) {
      const item = prefrences[i];
      //
      prefrences = prefrences.filter((type) => type !== null);
      //   console.log("Just something ", prefrences);
      if (!prefrenceCategories.includes(item.category)) {
        prefrenceCategories.push(item.category);
      }
    }
    // console.log("This is the category ", prefrenceCategories);

    while (prefrences.length > 0) {
      combinedArray.push(
        prefrences.filter(
          (type) => type && type.category === prefrences[0].category
        )
      );

      categoryType = combinedArray[combinedArray.length - 1][0].category;

      for (let i = 0; i < prefrences.length; i++) {
        const item = prefrences[i];
        if (item && item.category === categoryType) {
          prefrences.splice(i, 1, null);
        }
      }

      prefrences = prefrences.filter((type) => type !== null);
    }

    // console.log("categoryType ", categoryType);
    console.log("combinedArray  ", combinedArray);
    setRecords(combinedArray);
    setCategory(prefrenceCategories);
    console.log("records ", records);
    // console.log("TEST ", prefrences[0]);
  };

  useEffect(() => {
    fetchPrefrences();
  }, []);

  return (
    <>
      <h2 className='header'>EcoPrefrences</h2>
      <div className='table-spacing'>
        {/* {category.map((prefrence, index) => (
            <Label color='blue'>{prefrence}</Label>
        ))} */}
        <div className='label'>
          {records.map((items, index) => (
            <PrefrenceTable
              record={records[index]}
              category={category[index]}
              key={index}
            />
          ))}
        </div>
      </div>
    </>
  );
}

const PrefrenceTable = ({ record, category }) => {
  console.log("in prefrence table ", record);
  return (
    <>
      <Label color='blue'>{category}</Label>
      <Table celled selectable color='teal'>
        <Table.Header>
          <Table.Row>
            <TableHead
              headTitles={[
                "OID",
                "Settings Code",
                "Value",
                "Description",
                "Operation",
              ]}
            />
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {record &&
            record.map((item, index) => <TableData key={index} {...item} />)}
        </Table.Body>
      </Table>
    </>
  );
};

const TableData = ({ settingsCode, value, oid, description, inputUIType }) => {
  const [, setSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [valueEdited, setValueEdited] = useState(value);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleSave = () => {
    setSaving(true);
    if (valueEdited) {
      console.log("UPDATING ", valueEdited, value, oid);
    }
  };

  const handleChange = (value) => {
    console.log(value.value);
    setValueEdited(value.value);
  };

  return (
    <>
      <Table.Row>
        <Table.Cell> {oid} </Table.Cell>
        <Table.Cell> {settingsCode} </Table.Cell>
        <Table.Cell>
          {/* {value} */}
          {isEditing && inputUIType.toLowerCase() === "textbox" ? (
            !!Number(value) ? (
              <Input
                type='number'
                defaultValue={value}
                placeholder='value...'
                onValueChange={handleChange}
              />
            ) : (
              <Input
                type='text'
                defaultValue={value}
                placeholder='value...'
                onValueChange={handleChange}
              />
            )
          ) : (
            // <Input type='text' defaultValue={value} placeholder='value...' />
            value
          )}
        </Table.Cell>
        <Table.Cell> {description} </Table.Cell>
        <Table.Cell>
          {isEditing ? (
            <Button.Group size='mini'>
              <Button positive>Save</Button>
              <Button.Or />
              <Button onClick={handleCancel} negative>
                Cancel
              </Button>
            </Button.Group>
          ) : (
            <Button size='mini' color='teal' onClick={handleEdit}>
              Edit
            </Button>
          )}
        </Table.Cell>
      </Table.Row>
    </>
  );
};

const TableHead = (props) => {
  const { headTitles } = props;
  return headTitles.map((title) => (
    <Table.HeaderCell key={title}>{title}</Table.HeaderCell>
  ));
};
