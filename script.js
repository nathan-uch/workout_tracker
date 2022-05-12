let workoutForm = document.querySelector('.workoutForm');
let workoutDay = document.querySelector('.workoutDay');
let saveWorkoutDayBtn = document.querySelector('.saveDayBtn');
let selectedWorkoutDisplay = document.querySelector('.selectedWorkoutDisplay');
let editWorkoutDayBtn = document.querySelector('.editWorkoutDayBtn');
let todayWorkout = '';

saveWorkoutDayBtn.addEventListener('click', setWorkoutDay);

//changes the display of the workout of the day / split
function setWorkoutDay() {
    todayWorkout = workoutDay.options[workoutDay.selectedIndex].text;
    selectedWorkoutDisplay.textContent = 'Workout: ' + todayWorkout;
    editWorkoutDayBtn.style.visibility = 'visible';
    workoutForm.style.visibility = 'hidden';
};

editWorkoutDayBtn.addEventListener('click', changeWorkoutDay);

function changeWorkoutDay() {
    workoutForm.style.visibility = 'visible';
};

let $table = document.querySelector('#table');

//creates new table row
function createNewRow() {
    if (todayWorkout == '') {
        alert('Select which body part you will be training today.')
    } else {
        const newRow = document.createElement('tr');
        newRow.className = "exerciseRow";

        //creates 8 columns for each row
        for (let i = 0; i < 8; i++) {
            const newCell = newRow.insertCell(-1);
            let currentBodyPart = '';

            //creates 1st column: exercise selection
            if (i == 0) {
                const exerciseSelect = document.createElement('select');
                newCell.appendChild(exerciseSelect);
                exerciseSelect.className = 'exercise';
                exerciseSelect.name = 'exercise';

                //filters exercises according to which parts are being exercised that day
                if (todayWorkout == 'Back and Biceps') {
                    for (let exerOpt = 0; exerOpt < 12; exerOpt++) {
                        let newExerOpt = document.createElement('option');
                        if (exerOpt == 0) {
                            newExerOpt.value = 'pullUp';
                            newExerOpt.text = 'Pull Up';
                        } else if (exerOpt == 1) {
                            newExerOpt.value = 'chinUp';
                            newExerOpt.text = 'Chin Up';
                        } else if (exerOpt == 2) {
                            newExerOpt.value = 'hammerUp';
                            newExerOpt.text = 'Pull Up (Hammer Grip)';
                        } else if (exerOpt == 3) {
                            newExerOpt.value = 'latDown';
                            newExerOpt.text = 'Lat Pulldown (Wide)';
                        } else if (exerOpt == 4) {
                            newExerOpt.value = 'closeDown';
                            newExerOpt.text = 'Lat Pulldown (Close Grip)';
                        } else if (exerOpt == 5) {
                            newExerOpt.value = 'midDown';
                            newExerOpt.text = 'Lat Pulldown (Mid Grip)';
                        } else if (exerOpt == 6) {
                            newExerOpt.value = 'cableRow';
                            newExerOpt.text = 'Cable Row';
                        } else if (exerOpt == 7) {
                            newExerOpt.value = 'dbRow';
                            newExerOpt.text = 'Dumbbell Row';
                        } else if (exerOpt == 8) {
                            newExerOpt.value = 'tBarRow';
                            newExerOpt.text = 'T-Bar Row';
                        } else if (exerOpt == 9) {
                            newExerOpt.value = 'biCurl';
                            newExerOpt.text = 'Bicep Curl';
                        } else if (exerOpt == 10) {
                            newExerOpt.value = 'hammerCurl';
                            newExerOpt.text = 'Hammer Curl';
                        } else if (exerOpt == 11) {
                            newExerOpt.value = 'overhandCurl';
                            newExerOpt.text = 'Overhand Curl';
                        } 
                        exerciseSelect.appendChild(newExerOpt);
                    };

                //chest and tricep exercise selection options
                } else if (todayWorkout == 'Chest and Triceps') {
                    for (let exerOpt = 0; exerOpt < 8; exerOpt++) {
                        let newExerOpt = document.createElement('option');
                        if (exerOpt == 0) {
                            newExerOpt.value = 'benchPress';
                            newExerOpt.text = 'Bench Press';
                        } else if (exerOpt == 1) {
                            newExerOpt.value = 'inclinePress';
                            newExerOpt.text = 'Incline Press';
                        } else if (exerOpt == 2) {
                            newExerOpt.value = 'declinePress';
                            newExerOpt.text = 'Decline Press';
                        } else if (exerOpt == 3) {
                            newExerOpt.value = 'pecDec';
                            newExerOpt.text = 'Pec Dec';
                        } else if (exerOpt == 4) {
                            newExerOpt.value = 'closePress';
                            newExerOpt.text = 'Close Grip Bench Press';
                        } else if (exerOpt == 5) {
                            newExerOpt.value = 'skullcrusher';
                            newExerOpt.text = 'Skullcrusher';
                        } else if (exerOpt == 6) {
                            newExerOpt.value = 'triPulldown';
                            newExerOpt.text = 'Tricep Pulldown';
                        } else if (exerOpt == 7) {
                            newExerOpt.value = 'overheadPress';
                            newExerOpt.text = ' Overhead Press';
                        };
                        exerciseSelect.appendChild(newExerOpt);
                    };
                
                //legs exercise selection options
                } else if (todayWorkout == 'Legs') {
                    for (let exerOpt = 0; exerOpt < 7; exerOpt++) {
                        let newExerOpt = document.createElement('option');
                        if (exerOpt == 0) { 
                            newExerOpt.value = 'squats';
                            newExerOpt.text = 'Squats';
                        } else if (exerOpt == 1) {
                            newExerOpt.value = 'sumoDL';
                            newExerOpt.text = 'Sumo Deadlift';
                        } else if (exerOpt == 2) {
                            newExerOpt.value = 'rmDL';
                            newExerOpt.text = 'Romainian Deadlift';
                        } else if (exerOpt == 3) {
                            newExerOpt.value = 'legPress';
                            newExerOpt.text = 'Leg Press';
                        } else if (exerOpt == 4) {
                            newExerOpt.value = 'legExtension';
                            newExerOpt.text = 'Leg Extension';
                        } else if (exerOpt == 5) {
                            newExerOpt.value = 'legCurl';
                            newExerOpt.text = 'Leg Curl';
                        } else if (exerOpt == 6) {
                            newExerOpt.value = 'lounges';
                            newExerOpt.text = 'Lounges';
                        };
                        exerciseSelect.appendChild(newExerOpt);
                    };

                //shoulders and arms exercise selection options
                } else if (todayWorkout == 'Shoulders and Arms') {
                    for (let exerOpt = 0; exerOpt < 6; exerOpt++) {
                        let newExerOpt = document.createElement('option');
                        if (exerOpt == 0) {
                            newExerOpt.value = 'overheadPress';
                            newExerOpt.text = 'Overhead Press';
                        } else if (exerOpt == 1) {
                            newExerOpt.value = 'dbSideRaise';
                            newExerOpt.text = 'Dumbbell Side Raises';
                        } else if (exerOpt == 2) {
                            newExerOpt.value = 'reversePecDec';
                            newExerOpt.text = 'Reverse Pec Dec';
                        } else if (exerOpt == 3) {
                            newExerOpt.value = 'reverseFly';
                            newExerOpt.text = 'Reverse Fly';
                        } else if (exerOpt == 4) {
                            newExerOpt.value = 'machineSideRaise';
                            newExerOpt.text = 'Machine Side Raise';
                        } else if (exerOpt == 5) {
                            newExerOpt.value = 'bbOverheadPress';
                            newExerOpt.text = 'Barbbell Overhead Press';
                        };
                        exerciseSelect.appendChild(newExerOpt);
                    };
                };
                eventForBodyPart(exerciseSelect);
            } else if (i == 1) {
                newCell.className = 'bodyPart';
            } else if (i == 3) {
                const setsInput = document.createElement('input');
                newCell.appendChild(setsInput);
                setsInput.type = 'number';
                setsInput.className = 'sets';
                setsInput.min = '1';
                setsInput.max = '10';
            } else if (i == 4) {
                const repsInput = document.createElement('input');
                newCell.appendChild(repsInput);
                repsInput.type = 'number';
                repsInput.className = 'reps';
                repsInput.min = '1';
                repsInput.max = '30';
            } else if (i == 5) {
                const weightInput = document.createElement('input');
                newCell.appendChild(weightInput);
                weightInput.type = 'number';
                weightInput.className = 'weight';
                weightInput.min = '1';
                weightInput.max = '1000';
            } else if (i == 7) {
                const saveBtn = document.createElement('input');
                const deleteBtn = document.createElement('button');
                newCell.appendChild(saveBtn);
                newCell.appendChild(deleteBtn);
                saveBtn.type = 'submit';
                saveBtn.className = 'save';
                saveBtn.value = 'Save';
                deleteBtn.type = 'button';
                deleteBtn.className = 'delete';
                deleteBtn.textContent = 'Delete';
                addDeleteEvent(deleteBtn);
            };
        };
        $table.appendChild(newRow);
    };
};

document.querySelector('.addRowBtn').addEventListener('click', createNewRow);

//delete row button
function addDeleteEvent(deleteBtn) {
    deleteBtn.addEventListener('click', deleteRow);
};

function deleteRow() {
    let thisRow = this.closest('.exerciseRow');
    thisRow.remove();
};

//updates the body part according to the exercise selected
function eventForBodyPart(curExercise) {
    curExercise.addEventListener('change', updateBodyPart);
};

function updateBodyPart (exer) {
    let e = this.value;
    let exerBodyPart = this.parentElement.nextElementSibling;
    if (e == 'pullUp' || e == 'chinUp' || e == 'hammerUp' || e == 'latDown' || e == 'closeDown' || e == 'midDown' || e == 'cableRow' || e == 'dbRow' || e == 'tBarRow') {
        exerBodyPart.textContent = 'Lats';
    } else if (e == 'biCurl' || e == 'hammerCurl' || e == 'overhandCurl') {
        exerBodyPart.textContent = 'Biceps';
    } else if (e == 'benchPress' || e == 'inclinePress' || e == 'declinePress' || e == 'pecDec') {
        exerBodyPart.textContent = 'Chest';
    } else if (e == 'closePress' || e == 'skullcrusher' || e == 'triPulldown' || e == 'overheadPress') {
        exerBodyPart.textContent = 'Triceps';
    } else if (e == 'squats' || e == 'legPress' || e == 'legExtension') {
        exerBodyPart.textContent = 'Quads';
    } else if ( e == '' || e == '' || e == '') {
        exerBodyPart.textContent = 'Hamstrings';
    }
    console.log(this.value);
};