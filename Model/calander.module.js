import mongoose, { Schema } from "mongoose";

const calendarSchema = new Schema({
    course: {
        type: Schema.Types.ObjectId,
        ref: 'course',
        required: true
    },
    
    topic: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    remindertime: {
        type: Date,
        required: true
    },
    quiz: {
        type: String
    },
    assignment: {
        type: String
    },
    mid: {
        type: String
    },
    final: {
        type: String
    }
}, {
    timestamps: true 
});

const Calendar = mongoose.model("Calendar", calendarSchema);

export default Calendar;
