exports.postController=async(req,res)=>{
    let response = {
        is_success: true,
        user_id: "Aryan_Vigyat_12112001",
        email: "aryan.vigyat2020@vitstudent.ac.in",
        roll_number: "20BCE1452",
        numbers: [],
        alphabets: [],
        highest_alphabet: [],
    };
    try
    {
        
        const {data}=req.body;
        let highestAlphabet = "";
        if(data.length==0)
        {
            response.is_success=false
            return res.status(200).json(response)
        }
        for(const item of data)
        {
            if (!isNaN(item)) {
                // Check if the item is a number
                const number = parseFloat(item);
                response.numbers.push(number);
            }
            else  if (typeof item === "string" && item.length === 1)
            {
                response.alphabets.push(item.toUpperCase())
                if (item > highestAlphabet) {
                    highestAlphabet = item;
                }
            }
            else
            {
                response.is_success="false"
                response.numbers=[]
                response.alphabets=[]
                response.highest_alphabet=""
                return res.json(response)
            }
        }
        response.highest_alphabet=highestAlphabet
        return res.status(200).json(response)
    }
    catch(error)
    {
        return res.status(500).json({message:"Server Error"})
    }
}