# [10/16/2023, 13:38-14:55]
- **Today's Progress**: creating content w/ JS. 
- **Thoughts:** running into a Udacity site error, not loading my course. pivoted to reading on FCC instead until the issues are resolved. had to pivot my studies to not waste the sesh but still thankfully found some good free practice. 
---
- Cloned repo of #Udacity's homepage. 
	- ideally these issues are fixed tomorrow. 

---
### challenges from Khan Academy's DOM modules
```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Challenge: ID changer</title>
        <style>
            #id-card {
                border:1px solid black;
                border-radius:5px;
                width: 400px;
                font-family: monospace;
                padding: 6px;
                background: rgb(201, 255, 224);
            }
            #id-name {
                float: right;
            }
        </style>
    </head>
    <body>
        
        <div id="id-card" style="">
            <h3>Khan Academy identification card</h3>
            <img src="https://www.kasandbox.org/programming-images/creatures/Winston.png">
            <h1 id="id-name">First last</h1>
            
            
        </div>
        
    <script>
    var headingOne = document.getElementById('id-name');
    // declared a variable and stored the ID element of the h1 tag inside it
    </script>
    </body>
</html>
```

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Challenge: Custom name tags</title>
        <style>
            * {
                box-sizing: border-box;
            }
            
            .name-tag {
                border: 1px solid red;
                border-radius: 6px;
                width: 300px;
                height: 150px;
                margin-bottom: 10px;
                background: red;
                font-family: sans-serif;
            }
            
            .name-tag h1 {
                color: white;
                text-align: center;
                height: 25px;
                margin: 5px 0px 0px 0px;
                font-size: 20px;
            }
            .name-tag p {
                position: relative;
                left: 5px;
                padding: 10px;
                width: 290px;
                height: 90px;
                background: white;
                font-family: cursive;
                font-size: 20px;
                text-align: center;
            }
        </style>
    </head>
    <body>

        
        <div class="name-tag">
            <h1>Hello, my name is...</h1>
            <p>Grace Hopper</p>
        </div>
        
        <div class="name-tag">
            <h1>Hello, my name is...</h1>
            <p>Alan Turing</p>
        </div>
        
        <script>
        var headings = document.getElementsByTagName('h1');
        for (var i = 0; i < headings.length; i++) {
            headings[i].innerHTML = "Ms. Twerksumn Class of 2023";
        }
        </script>
    </body>
</html>
```



























