function execute() {
    operation = document.getElementById("operation").value;
    opcode = "";
    input1 = document.getElementById("input1").value.toUpperCase();
    input2 = document.getElementById("input2").value.toUpperCase();
    input1_code = "";
    input2_code = "";
    input1_value = "";
    input2_value = "";
    mode = "";
    extension_source = "";
    extension_word = "";
    extension_hex = "";
    extension_hex2 = "";
    extension_bin = "";
    extension_bin2 = "";
    add_total = -99999;
    guidetext = "";
    invalid = false;
    instruction = "";
    instruction_hex = "";

    switch (operation) {
        case "ADD":
            add();
            break;
        case "MOVE":
            move();
            break;
        case "LOAD":
            load();
            break;
        case "STORE":
            store();
            break;
        case "JMP":
            jmp();
            break;
        case "JPZ":
            jpz();
            break;
        case "JPP":
            jpp();
            break;
        case "JPN":
            jpn();
            break;
    }

    //plug new values for guide
    if (!invalid) {
        getCodes();
        statusFlag();
        plugHTML();
    }
    document.getElementById('guide').innerHTML = guidetext;
}

function add() {
    opcode = "00";
    if (input2.length < 1 || !isNaN(input1)) {
        guidetext = "Invalid Input! Did you read the <span style='color:purple;'>parameters</span>?";
        invalid = true;
    } else {
        if (isNaN(input2)) {
            mode = "add_reg";
            guidetext = document.getElementById('add_reg').innerHTML;

        } else {
            mode = "add_val";
            input2_value = input2;
            guidetext = document.getElementById('add_val').innerHTML;
            input2_code = "101"
        }
    }
    //build extension words
    if (!isNaN(input2)) {
        //check to see if number is negative and should be signed
        if (input2_value < 0) {
            //parse input2_value from decimal to binary
            var temp_iv2_asbin = parseInt((input2_value * -1), 10).toString(2);
            do {
                temp_iv2_asbin = "0" + temp_iv2_asbin.toString();
            }
            while (temp_iv2_asbin.length < 8)
            //swap the ones and zeros by subtracting as decimal from the decimal '11111111'
            var temp = 11111111 - parseInt(temp_iv2_asbin, 10);
            //var temp = temp(as binary) + 1
            var temp = parseInt(temp, 2) + 1;
            var temp = temp.toString(2);
            //put into HTML as binary
            extension_bin = temp;
            do {
                extension_bin = "0" + extension_bin;
            } while (extension_bin.length < 8)
            //parse our signed number to hex
            extension_hex = parseInt(extension_bin, 2).toString(16).toUpperCase();
        } else {
            extension_bin = parseInt(input2_value, 10).toString(2);
            do {
                extension_bin = "0" + extension_bin;
            } while (extension_bin.length < 8)
            extension_hex = parseInt(input2_value, 10).toString(16);
        }
    }

}



function move() {
    opcode = "01";
    if (input2.length < 1) {
        guidetext = "Invalid Input! Did you read the <span style='color:purple;'>parameters</span>?";
        invalid = true;
    } else {
        if (isNaN(input2)) {
            mode = "move_reg";
            guidetext = document.getElementById('move_reg').innerHTML;
        } else {
            mode = "move_val";
            guidetext = document.getElementById('move_val').innerHTML;
            input2_value = input2;
            input2_code = "101"
        }
    }
    //build extension words
    if (!isNaN(input2)) {
        //check to see if number is negative and should be signed
        if (input2_value < 0) {
            //parse input2_value from decimal to binary
            var temp_iv2_asbin = parseInt((input2_value * -1), 10).toString(2);
            do {
                temp_iv2_asbin = "0" + temp_iv2_asbin.toString();
            }
            while (temp_iv2_asbin.length < 8)
            //swap the ones and zeros by subtracting as decimal from the decimal '11111111'
            var temp = 11111111 - parseInt(temp_iv2_asbin, 10);
            //var temp = temp(as binary) + 1
            var temp = parseInt(temp, 2) + 1;
            var temp = temp.toString(2);
            //put into HTML as binary
            extension_bin = temp;
            do {
                extension_bin = "0" + extension_bin;
            } while (extension_bin.length < 8)
            //parse our signed number to hex
            extension_hex = parseInt(extension_bin, 2).toString(16).toUpperCase();
        } else {
            extension_bin = parseInt(input2_value, 10).toString(2);
            do {
                extension_bin = "0" + extension_bin;
            } while (extension_bin.length < 8)
            extension_hex = parseInt(input2_value, 10).toString(16);
        }
    }
}

function load() {
    opcode = "01";
    if (!isNaN(input1)) {
        guidetext = "Invalid Input! Did you read the <span style='color:purple;'>parameters</span>?";
        invalid = true;
    } else {
        guidetext = document.getElementById('load').innerHTML;
        input2_code = "110"
        //get extension codes as hex
        extension_source = "input2";
    }
}

function store() {
    opcode = "01";
    if (!isNaN(input2)) {
        guidetext = "Invalid Input! Did you read the <span style='color:purple;'>parameters</span>?";
        invalid = true;
    } else {
        guidetext = document.getElementById('store').innerHTML;
        input1_code = "110"
        extension_source = "input1";
    }
}

function jmp() {
    instruction = "10000000";
    opcode = "10";
    input1_code = "000";
    input2_code = "000";
    instruction_hex = "80";
    extension_source = "input1";
    document.getElementById("input2").value = "";
    guidetext = document.getElementById('jmp').innerHTML;
}

function jpz() {
    instruction = "10000001";
    opcode = "10";
    input1_code = "000";
    input2_code = "001";
    instruction_hex = "81";
    extension_source = "input1";
    document.getElementById("input2").value = "";
    guidetext = document.getElementById('jpz').innerHTML;
}

function jpp() {
    instruction = "10000010";
    opcode = "10";
    input1_code = "000";
    input2_code = "010";
    instruction_hex = "82";
    extension_source = "input1";
    document.getElementById("input2").value = "";
    guidetext = document.getElementById('jpp').innerHTML;
}

function jpn() {
    instruction = "10000011";
    opcode = "10";
    input1_code = "000";
    input2_code = "011";
    instruction_hex = "83";
    extension_source = "input1";
    document.getElementById("input2").value = "";
    guidetext = document.getElementById('jpn').innerHTML;
}

function getCodes() {
    if (isNaN(input1)) {
        switch (input1) {
            case "A":
                input1_code = "000";
                input1_value = document.getElementById("register_A").value;
                break;
            case "B":
                input1_code = "001";
                input1_value = document.getElementById("register_B").value;
                break;
            case "C":
                input1_code = "010";
                input1_value = document.getElementById("register_C").value;
                break;
            case "D":
                input1_code = "011";
                input1_value = document.getElementById("register_D").value;
                break;
            case "E":
                input1_code = "100";
                input1_value = document.getElementById("register_E").value;
                break;
        }
    }

    if (isNaN(input2)) {
        switch (input2) {
            case "A":
                input2_code = "000";
                input2_value = document.getElementById("register_A").value;
                break;
            case "B":
                input2_code = "001";
                input2_value = document.getElementById("register_B").value;
                break;
            case "C":
                input2_code = "010";
                input2_value = document.getElementById("register_C").value;
                break;
            case "D":
                input2_code = "011";
                input2_value = document.getElementById("register_D").value;
                break;
            case "E":
                input2_code = "100";
                input2_value = document.getElementById("register_E").value;
                break;
        }
    }
    if (extension_source.length > 0) {
        if (extension_source === "input1") {
            if (isNaN(input1)) {
                extension_word = input1.replace("H", "")
            } else {
                extension_word = parseInt(input1, 10).toString(16).toUpperCase();
            }
            extension_hex = extension_word.slice(-2);
            extension_hex2 = extension_word.substring(0, extension_word.length - 2);
            if (extension_hex.length > 0) {
                extension_bin = parseInt(extension_hex, 16).toString(2)
            };
            if (extension_hex2.length > 0) {
                extension_bin2 = parseInt(extension_hex2, 16).toString(2)
            };
        } else {
            if (isNaN(input2)) {
                extension_word = input2.replace("H", "")
            } else {
                extension_word = parseInt(input2, 10).toString(16).toUpperCase();
            }
            extension_hex = extension_word.slice(-2);
            extension_hex2 = extension_word.substring(0, extension_word.length - 2);
            if (extension_hex.length > 0) {
                extension_bin = parseInt(extension_hex, 16).toString(2)
            };
            if (extension_hex2.length > 0) {
                extension_bin2 = parseInt(extension_hex2, 16).toString(2)
            };
        }
    }
    instruction = opcode + input1_code + input2_code;


    //Get hex value of instruction word
    instruction_hex = "<span style='color:purple'>" + parseInt(instruction, 2).toString(16) + "</span>";
    //parseInt(document.getElementById("input2").value, 10)
    //.toString(16);
}

function statusFlag() {
    //Get outcomes and Assign value to status_result var
    switch (mode) {
        case "add_reg":
            add_total = Number(input1_value) + Number(input2_value);
            status_result = add_total;
            statusHTML();
            document.getElementById("register_" + input1).value = status_result;
            break;
        case "add_val":
            add_total = Number(input1_value) + Number(input2_value);
            status_result = add_total;
            statusHTML();
            document.getElementById("register_" + input1).value = status_result;
            break;
        case "move_reg":
            status_result = input2_value;
            statusHTML();
            document.getElementById("register_" + input1).value = status_result;
            break;

        case "move_val":
            status_result = input2_value;
            statusHTML();
            document.getElementById("register_" + input1).value = status_result;
            break;
        case "store":
            status_result = input2_value;
            statusHTML();
            document.getElementById("register_" + input2).value = status_result;
            break;
        case "load":
            status_result = input1_value;
            statusHTML();
            document.getElementById("register_" + input1).value = status_result;
            break;
        case "move_val":
            status_result = input2_value;
            statusHTML();
            document.getElementById("register_" + input1).value = status_result;
            break;
        case "jmp":
            status_result = input2_value;
            statusHTML();
            break;
        case "jpz":
            status_result = input2_value;
            statusHTML();
            break;
        case "jpp":
            status_result = input2_value;
            statusHTML();
            break;
        case "jpn":
            status_result = input2_value;
            statusHTML();
            break;
    }

    function signedNumber() {
        if (input2_value < 0) {
            //parse input2_value from decimal to binary
            var temp_iv2_asbin = parseInt((input2_value * -1), 10).toString(2);
            do {
                temp_iv2_asbin = "0" + temp_iv2_asbin.toString();
            }
            while (temp_iv2_asbin.length < 8)
            //swap the ones and zeros by subtracting as decimal from the decimal '11111111'
            var temp = 11111111 - parseInt(temp_iv2_asbin, 10);
            //var temp = temp(as binary) + 1
            var temp = parseInt(temp, 2) + 1;
            var temp = temp.toString(2);
            //put into HTML as binary
            extension_bin = temp;
            do {
                extension_bin = "0" + extension_bin;
            } while (extension_bin.length < 8)
            //parse our signed number to hex
            extension_hex = parseInt(extension_bin, 2).toString(16).toUpperCase();
        } else {
            extension_bin = parseInt(input2_value, 10).toString(2);
            do {
                extension_bin = "0" + extension_bin;
            } while (extension_bin.length < 8)
            extension_hex = parseInt(input2_value, 10).toString(16);
        }
    }
    //Determine if outcome was -,+,0 or overflow
    function statusHTML() {
        if (status_result > 0) {
            if (status_result > 127) {
                statustext = "<table id='status_table'><tr><th colspan='8'>Status Flag Register</th></tr><tr><td>7</td><td>6</td><td>5</td><td>4</td><td>3</td><td>2</td><td>1</td><td>0</td></tr>" + "<tr><td>-</td><td>-</td><td>-</td><td>-</td><td>0</td><td>0</td><td>0</td><td>1</td></tr></table>"
                statustext += "Bit 0 - Set to 1 as the outcome was an overflow";
                status_result = 127;
            } else {
                statustext = "<table id='status_table'><tr><th colspan='8'>Status Flag Register</th></tr><tr><td>7</td><td>6</td><td>5</td><td>4</td><td>3</td><td>2</td><td>1</td><td>0</td></tr>" + "<tr><td>-</td><td>-</td><td>-</td><td>-</td><td>0</td><td>0</td><td>1</td><td>0</td></tr></table>"
                statustext += "Bit 1 - Set to 1 as the outcome was a non-zero positive";
            }
        } else if (status_result < 0) {
            if (status_result < -128) {
                statustext = "<table id='status_table'><tr><th colspan='8'>Status Flag Register</th></tr><tr><td>7</td><td>6</td><td>5</td><td>4</td><td>3</td><td>2</td><td>1</td><td>0</td></tr>" + "<tr><td>-</td><td>-</td><td>-</td><td>-</td><td>0</td><td>0</td><td>0</td><td>1</td></tr></table>"
                statustext += "Bit 0 - Set to 1 as the outcome was an underflow";
                status_result = -128;
            } else {
                statustext = "<table id='status_table'><tr><th colspan='8'>Status Flag Register</th></tr><tr><td>7</td><td>6</td><td>5</td><td>4</td><td>3</td><td>2</td><td>1</td><td>0</td></tr>" + "<tr><td>-</td><td>-</td><td>-</td><td>-</td><td>1</td><td>0</td><td>0</td><td>0</td></tr></table>"
                statustext += "Bit 3 - Set to 1 as the outcome was negative";
            }
        } else {
            statustext = "<table id='status_table'><tr><th colspan='8'>Status Flag Register</th></tr><tr><td>7</td><td>6</td><td>5</td><td>4</td><td>3</td><td>2</td><td>1</td><td>0</td></tr>" + "<tr><td>-</td><td>-</td><td>-</td><td>-</td><td>0</td><td>1</td><td>0</td><td>0</td></tr></table>"
            statustext += "Bit 2 - Set to 1 as the outcome was zero";
        }
    }
}


function plugHTML() {
    guidetext = guidetext.replace(/%input1%/g, input1);
    guidetext = guidetext.replace(/%input1_code%/g, input1_code);
    guidetext = guidetext.replace(/%input1_value%/g, input1_value);
    guidetext = guidetext.replace(/%input2%/g, input2);
    guidetext = guidetext.replace(/%input2_code%/g, input2_code);
    guidetext = guidetext.replace(/%input2_value%/g, input2_value);
    guidetext = guidetext.replace(/%hex_instruction%/g, instruction_hex);
    guidetext = guidetext.replace(/%add_total%/g, add_total);
    guidetext = guidetext.replace(/%extension_bin1%/g, extension_bin);
    document.getElementById("instruction_bin1").innerHTML = "<span style='color: red;'>" + opcode + "</span>";
    document.getElementById("instruction_bin2").innerHTML = "<span style='color: blue;'>" + input1_code; + "</span>";
    document.getElementById("instruction_bin3").innerHTML = "<span style='color: green;'>" + input2_code; + "</span>";
    document.getElementById("instruction_hex").innerHTML = "<span style='color: purple;'>" + instruction_hex; + "</span>";
    extension_hex = extension_hex.slice(-2);
    document.getElementById("extension_hex").innerHTML = extension_hex;
    document.getElementById("extension_hex2").innerHTML = extension_hex2;
    document.getElementById("extension_bin").innerHTML = extension_bin;
    document.getElementById("extension_bin2").innerHTML = extension_bin2;
    document.getElementById("status_flag").innerHTML = statustext;
}

function info() {
    var operation = document.getElementById("operation").value;
    switch (operation) {
        case "ADD":
            text = "<sub>Parameters: ' DestReg, SrcReg ' or ' DestReg, Value '</sub>";
            img = "add.png";
            break;
        case "MOVE":
            text = "<sub>Parameters: ' DestReg, SrcReg ' or ' DestReg, Value '</sub>";
            img = "move.png";
            break;
        case "STORE":
            text = "<sub>Parameters: ' Addr, SrcReg '<br>(Be sure to add H at the end if number is HEX!)</sub> ";
            img = "store.png";
            break;
        case "LOAD":
            text = "<sub>Parameters: ' DestReg, Addr '<br> (Be sure to add H at the end if number is HEX!)</sub>";
            img = "load.png";
            break;
        case "JMP":
            text = "<sub>Parameters: ' Addr (Leave second box empty)'</sub>";
            img = "jmp.png";
            break;
        case "JPZ":
            text = "<sub>Parameters: ' Addr (Leave second box empty)'</sub>";
            img = "jpz.png";
            break;
        case "JPP":
            text = "<sub>Parameters: ' Addr (Leave second box empty)'</sub>";
            img = "jpp.png";
            break;
        case "JPN":
            text = "<sub>Parameters: ' Addr (Leave second box empty)'</sub>";
            img = "jpn.png";
            break;
    }
    document.getElementById("datasheet").innerHTML = "<img src='img/" + img + "' style='width: 800px;'>";
    document.getElementById("parameters").innerHTML = text;
}
