// FakeResponsive.js
console.log("[FakeResponsive] Intercepted: " + $request.url);

function formatTimestamp9(d) {
    const pad = (n, w = 2) => String(n).padStart(w, '0');
    const year = d.getFullYear();
    const month = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    const hours = pad(d.getHours());
    const minutes = pad(d.getMinutes());
    const seconds = pad(d.getSeconds());
    const millis = String(d.getMilliseconds()).padStart(3, '0');
    const fraction = millis + '000000'; // 9 chữ số phần giây
    return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${fraction}`;
}

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}


const fakeData = {
    "timestamp": formatTimestamp9(new Date()),
    "traceId": uuidv4(),
    "code": "success",
    "message": "0000",
    "data": {
        "id": null,
        "name": "Đệ nhất Đại Phú",
        "code": "de_nhat_dai_phu",
        "icon": "https://file.gamee.vn/546dc899d-rank_6.png",
        "yourScore": 1020000,
        "rankScore": 26,
        "rankConfigs": [{
                "id": 14,
                "name": "Tập sự gieo hạt",
                "code": "tap_su_gieo_hat",
                "icon": "https://file.gamee.vn/1733883711457_Tập sự  gieo hạt.png",
                "fromLevel": 0,
                "toLevel": 2,
                "requiredTotalExp": 0,
                "rankAwards": [],
                "receivingStatus": 1
            },
            {
                "id": 15,
                "name": "Nông phu lấm lem",
                "code": "nong_phu_lam_lem",
                "icon": "https://file.gamee.vn/1733883723039_Nông phu lấm lem.png",
                "fromLevel": 3,
                "toLevel": 6,
                "requiredTotalExp": 3400,
                "rankAwards": [{
                    "id": 51,
                    "awardType": {
                        "id": 4,
                        "name": "Khung avatar"
                    },
                    "quantity": 1,
                    "image": "https://file.gamee.vn/1734924793704_avatar_2.png"
                }],
                "receivingStatus": 0
            },
            {
                "id": 26,
                "name": "Nông gia khéo léo",
                "code": "nong_gia_kheo_leo",
                "icon": "https://file.gamee.vn/bd4bfbab0-Nông gia khéo léo.png",
                "fromLevel": 7,
                "toLevel": 10,
                "requiredTotalExp": 11300,
                "rankAwards": [{
                        "id": 40,
                        "awardType": {
                            "id": 1,
                            "name": "XP mỗi ngày"
                        },
                        "quantity": 50,
                        "image": "https://file.gamee.vn/1733899218180_exp.f.svg"
                    },
                    {
                        "id": 54,
                        "awardType": {
                            "id": 4,
                            "name": "Khung avatar"
                        },
                        "quantity": 1,
                        "image": "https://file.gamee.vn/1734924876608_avatar_4.png"
                    }
                ],
                "receivingStatus": 0
            },
            {
                "id": 27,
                "name": "Bậc thầy đồng áng",
                "code": "bac_thay_dong_ang",
                "icon": "https://file.gamee.vn/da5965599-rank_4.png",
                "fromLevel": 11,
                "toLevel": 15,
                "requiredTotalExp": 37300,
                "rankAwards": [{
                        "id": 42,
                        "awardType": {
                            "id": 1,
                            "name": "XP mỗi ngày"
                        },
                        "quantity": 100,
                        "image": "https://file.gamee.vn/1733899196095_exp.f.svg"
                    },
                    {
                        "id": 43,
                        "awardType": {
                            "id": 2,
                            "name": "Ting Ting"
                        },
                        "quantity": 2000,
                        "image": "https://file.gamee.vn/1734170262009_coin.png"
                    },
                    {
                        "id": 44,
                        "awardType": {
                            "id": 3,
                            "name": "Giảm giá"
                        },
                        "quantity": 5,
                        "image": "https://file.gamee.vn/1733890016264_giamgia2.jpg"
                    }
                ],
                "receivingStatus": 0
            },
            {
                "id": 28,
                "name": "Phú hào điền trang",
                "code": "phu_hao_dien_trang",
                "icon": "https://file.gamee.vn/da0c470fe-rank_5.png",
                "fromLevel": 16,
                "toLevel": 21,
                "requiredTotalExp": 167000,
                "rankAwards": [{
                        "id": 45,
                        "awardType": {
                            "id": 1,
                            "name": "XP mỗi ngày"
                        },
                        "quantity": 100,
                        "image": "https://file.gamee.vn/1733899230951_exp.f.svg"
                    },
                    {
                        "id": 46,
                        "awardType": {
                            "id": 2,
                            "name": "Ting Ting"
                        },
                        "quantity": 3000,
                        "image": "https://file.gamee.vn/1734170262009_coin.png"
                    },
                    {
                        "id": 47,
                        "awardType": {
                            "id": 3,
                            "name": "Giảm giá"
                        },
                        "quantity": 10,
                        "image": "https://file.gamee.vn/1733899238841_giamgia2.jpg"
                    }
                ],
                "receivingStatus": 0
            },
            {
                "id": 34,
                "name": "Đệ nhất Đại Phú",
                "code": "de_nhat_dai_phu",
                "icon": "https://file.gamee.vn/546dc899d-rank_6.png",
                "fromLevel": 22,
                "toLevel": 26,
                "requiredTotalExp": 1020000,
                "rankAwards": [{
                        "id": 49,
                        "awardType": {
                            "id": 2,
                            "name": "Ting Ting"
                        },
                        "quantity": 5000,
                        "image": "https://file.gamee.vn/1734170262009_coin.png"
                    },
                    {
                        "id": 50,
                        "awardType": {
                            "id": 3,
                            "name": "Giảm giá"
                        },
                        "quantity": 15,
                        "image": "https://file.gamee.vn/1733899262205_giamgia2.jpg"
                    },
                    {
                        "id": 56,
                        "awardType": {
                            "id": 1,
                            "name": "XP mỗi ngày"
                        },
                        "quantity": 200,
                        "image": "https://file.gamee.vn/1734497615448_exp.svg"
                    }
                ],
                "receivingStatus": 1
            }
        ]
    }
};

// Tự động tính yourScore và rankScore theo requiredTotalExp của rank đang đạt (receivingStatus = 1)
(function() {
    try {
        const data = fakeData && fakeData.data;
        if (data && Array.isArray(data.rankConfigs)) {
            const ranks = data.rankConfigs;
            const achieved = ranks.filter(r => r && r.receivingStatus === 1);
            let current = null;
            if (achieved.length) {
                // Chọn rank có toLevel cao nhất trong các rank đã đạt
                current = achieved.sort((a, b) => (a.toLevel || 0) - (b.toLevel || 0)).pop();
            }
            if (!current) {
                // Nếu chưa có rank nào đạt, mặc định lấy rank đầu tiên
                current = ranks[0];
            }
            data.rankScore = (current && typeof current.toLevel === 'number') ? current.toLevel : 0;
            data.yourScore = (current && typeof current.requiredTotalExp === 'number') ? current.requiredTotalExp : 0;
        }
    } catch (e) {
        console.log('Auto-score compute error:', e);
    }
})();

$done({
    status: 200,
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(fakeData)
});
