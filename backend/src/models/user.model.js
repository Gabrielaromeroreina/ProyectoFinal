const { Schema } = mongoose

const userSchema = new Schema(
    {
        userName: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        confirmPassword: {type: String, required: true},
        isActive: {type: Boolean, default: true},
    },
    {
        timestamps: true,
        versionKey: false
    }
)

module.exports = mongoose.model('User', userSchema)
