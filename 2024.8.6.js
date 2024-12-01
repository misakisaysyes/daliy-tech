class RedPackage {
    constructor(money, count) {
        if(money < count * 0.01) {
            console.log('单个红包至少0.01元');
            return;
        }
        money *= 100;
        this.count = count;
        this.redPackages = [];
        for(let i = 0; i < count; i++) {
            let base = 1;
            let randomMoney = Math.floor(((money - 1) * Math.random()));
            let redPackageMoney = base + (randomMoney > 0 ? randomMoney : 0);
            // console.log(base, randomMoney, redPackageMoney);
            this.redPackages.push(redPackageMoney);
            money -= redPackageMoney;
        }
        if(money > 0) {
            this.redPackages[Math.floor(count * Math.random())] += money;
        }
        // console.log(this.redPackages);
    }

    openPackage() {
        if(!this.redPackages.length) {
            console.log('手气慢了，下次再来');
            return;
        }
        const idx = Math.floor(this.count * Math.random());
        console.log('恭喜抢到红包：', this.redPackages[idx] / 100);
        this.count--;
        this.redPackages.splice(idx, 1);
    }
}

const redPack = new RedPackage(100, 10);
for(let i = 0; i < 100; i++) {
    redPack.openPackage();
}
