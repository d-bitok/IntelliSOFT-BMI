const router = require("express").Router();
let IntelliSOFT_BMI_Data = require("../models/intellisoft.model");

router.route("/").get((req, res) => {
    IntelliSOFT_BMI_Data.find(function(err, dbIntelliSOFT) {
        if (err) {
            console.log(err);
        } else {
            res.json(dbIntelliSOFT);
        }
    });
});

router.route("/api").get((req, res) => {
    res.json({message: "Hello There!"});
})

router.route("/completed").get((req, res) => {
    IntelliSOFT_BMI_Data.find(function(err, dbIntelliSOFT) {
        if (err) {
            console.log(err);
        } else {
            let completedDBintelliSOFT = dbIntelliSOFT.filter(dbIntelliSOFT_data => dbIntelliSOFT_data.dbIntelliSOFT_data_completed);
            res.json(completedDBintelliSOFT);
        }
    });
});

router.route("/incomplete").get((req, res) => {
    IntelliSOFT_BMI_Data.find(function(err, dbIntelliSOFT) {
        if (err) {
            console.log(err);
        } else {
            let inCompletedDBintelliSOFT = dbIntelliSOFT.filter(dbIntelliSOFT_data => !dbIntelliSOFT_data.dbIntelliSOFT_data_completed);
            res.json(inCompletedDBintelliSOFT);
            
        }
    })
});

router.route("/:dob").get((req, res) => {
    let dob = req.params.dob_date;
    IntelliSOFT_BMI_Data.find(dob, (err, dbIntelliSOFT_data) => {
        res.json(dbIntelliSOFT_data);
    });
});

router.route("/add").post((req, res) => {
    const name = new IntelliSOFT_BMI_Data(req.body);

    name
        .save()
        .then(name => {
            res
                .status(200)
                .json({ addedIntelliSOFT_bmi_data: name, dbIntelliSOFT: "Name added Successfully!" });
        })
        .catch(err => {
            res.status(400).json({ dbIntelliSOFT: "ERROR: Name could not be added" });
        });
});


router.route("/update/:dob").post(function(req, res) {
    IntelliSOFT_BMI_Data.findById(req.params.dob_date, function(err, report) {
        if (!report) res.status(404).send("data is not found");
        else report.rep_first_name = req.body.rep_first_name;
            report.rep_last_name = req.body.rep_last_name;
            report.rep_dob_date = req.body.rep_dob_date;
            report.rep_current_date = req.body.rep_current_date;
            report.rep_height = req.body.rep_height;
            report.rep_weight = req.body.rep_weight;
            report.rep_BMI = req.body.rep_BMI;
            report.rep_health = req.body.rep_health;
            report.rep_on_diet = req.body.rep_on_diet;
            report.rep_on_prescription = req.body.rep_on_prescription;
            report.rep_comments = req.body.rep_comments;
            report.rep_bmi_status = req.body.rep_bmi_status;
            report.rep_age = req.body.rep_age;
        
        report
            .save()
            .then(report => {
                res.json("Data Updated!");
            })
            .catch(err => {
                res.status(400).send("Cannot update data");
            });
    });
});

module.exports = router;