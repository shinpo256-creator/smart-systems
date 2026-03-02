window.onload = function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.onsubmit = function(e) {
            let hasError = false;
            const targets = form.querySelectorAll('[required]');
            
            for (let i = 0; i < targets.length; i++) {
                const input = targets[i];
                const td = input.parentNode;
                const error = td.querySelector('.error');
                
                // --- リセット（通常時のスタイル） ---
                input.style.border = "1px solid #ddd";
                input.style.backgroundColor = "#fdfdfd";
                if (error) {
                    error.innerHTML = "";
                    error.style.display = "none";
                }

                // --- チェック（空っぽの時） ---
                if (input.value.trim() === "") {
                    // 入力欄をほんのり色付けして「ここだよ」と教える
                    input.style.border = "1px solid #d1bfa7"; 
                    input.style.backgroundColor = "#fffaf5"; 
                    
                    if (error) {
                        // 威圧感を抑えた優しいメッセージ
                        error.innerHTML = "入力をお願いします🐕"; 
                        error.style.color = "#d1bfa7"; // 落ち着いたベージュ系
                        error.style.fontSize = "0.75rem";
                        error.style.marginTop = "4px";
                        error.style.display = "block";
                        error.style.opacity = "0.9"; // 少し透かして柔らかく
                    }
                    hasError = true;
                }
            }

            if (hasError) {
                e.preventDefault();
                return false;
            }
        };
    }
};