import React  from 'react';
import {StyleSheet} from 'react-native';
import {useState} from "react";
import Title from "./Title";
import Dropzone from "react-dropzone";

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    dropzone: {
        padding: 20,
        border: "3px blue dashed",
        width: '60%',
        margin: 'auto'
    }
});

function EmployeesUpload({setUploadedEmployeesList}) {

    const [selectedFile, setSelectedFile] = useState('No file selected yet');
    const [employeesList, setEmployeesList] = useState([]);

    async function parse(file) {
        const reader = new FileReader();
        reader.readAsText(file);
        const result = await new Promise((resolve, reject) => {
            reader.onload = function (event) {
                resolve(reader.result)
            }
        })
        console.log(result)
        return result;
    }


    async function loadFile() {

        let fileContent = await parse(selectedFile);
        const array = fileContent.toString().split("\n");
  //      emploeesTable.tableHead = array[0].split(",")
        let employees = []
        for (let i = 1; i < array.length - 1; i++) {
            const employee = array[i].split(",")
// ["employeeId", "mnemonic", "address","private_key", "public_key", "compressed_public_key"]
            employees.push({
                employeeId: employee[0],
                mnemonic: employee[1],
                address: employee[2],
                privateKey: employee[3],
            })
            setUploadedEmployeesList(employees)
            setEmployeesList(employees)
        }

    }

    return (
        <div className="demo">
            <Title/>

            <div style={styles.dropzone}>
                <Dropzone onDrop={(selectedFile) => {
                    console.log(selectedFile)
                    setSelectedFile(selectedFile[0]);
                }}>
                    {({getRootProps, getInputProps}) => (
                        <section>
                            <div {...getRootProps()}>
                                <input {...getInputProps()} />
                                <p>Drag 'n' drop the CSV file to upload</p>
                            </div>
                        </section>
                    )}
                </Dropzone>
                {selectedFile.path}
            </div>
            <div className="scroll">
            <ul>
                {
                    employeesList.map((employee) => (
                        <li key={employee.employeeId}>
                            {employee.employeeId} - {employee.mnemonic}- {employee.address}- {employee.privateKey}
                        </li>
                    ))
                }
            </ul>
            </div>
            <button type="submit" className="btn" onClick={loadFile}>Load CSV files</button>

        </div>
    );
}

export default EmployeesUpload;
