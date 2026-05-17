
function studentScore(marks){
    
    let grade
    if(marks<=100 && marks>=0){
        switch(true){
            case (marks>=90):
                grade='A'
                break
            case (marks>=80):
                grade='B'
                break
            case (marks>=70):
                grade='C'
                break
            case (marks>=60):
                grade='D'
                break
            case (marks>=50):
                grade='E'
                break
            default:
                grade='F'
                break
        }
    }
    console.log("Student grade is "+ grade)
    
}
studentScore(91)
studentScore(60)
studentScore(50)
studentScore(41)