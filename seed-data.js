var seedProducts = [
  { name: "طقم تنورة وتوب دانتيل", brand: "Mervy", category: "أطقم", image: "https://images.unsplash.com/photo-1551803091-e20673f15770?w=400&h=400&fit=crop", sizes: [{size: "36", price: 280},{size: "38", price: 280},{size: "40", price: 280},{size: "42", price: 280}], status: "new", description: "طقم تنورة وتوب بتفاصيل أنيقة ولمسة دانتيل ناعمة على الأكمام" },
  { name: "فستان دانتيل فاخر بني", brand: "Mervy", category: "فساتين", image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop", sizes: [{size: "36", price: 350},{size: "38", price: 350},{size: "40", price: 350}], status: "bestseller", description: "أناقة ملكية بتفاصيل راقية ولمعة ناعمة تخطف الأنظار" },
  { name: "فستان ربيعي ورد وزركون", brand: "Mervy", category: "فساتين", image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=400&h=400&fit=crop", sizes: [{size: "42", price: 320},{size: "44", price: 320},{size: "46", price: 320},{size: "48", price: 320}], status: "new", description: "فستان ربيعي بلون الورد والزركون الاخضر - ستايل أنيق ولمسة فخامة" },
  { name: "طقم بولكا دوت بلايزر وبنطلون", brand: "Mervy", category: "أطقم", image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop", sizes: [{size: "36", price: 300},{size: "38", price: 300},{size: "40", price: 300},{size: "42", price: 300}], status: "bestseller", description: "بلايزر مع بنطلون بتصميم سكرت - ستايل أنيق وعصري" },
  { name: "فستان شيفون كشكش مطرز", brand: "Mervy", category: "فساتين", image: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?w=400&h=400&fit=crop", sizes: [{size: "42", price: 290},{size: "44", price: 290},{size: "46", price: 290},{size: "48", price: 290}], status: "new", description: "فستان شيفون بتفاصيل كشكش وتطريز أنيق لإطلالة مميزة" },
  { name: "قميص كاجوال شيك", brand: "Mervy", category: "قمصان", image: "https://images.unsplash.com/photo-1598033129183-c4f50c736c10?w=400&h=400&fit=crop", sizes: [{size: "32", price: 150},{size: "34", price: 150},{size: "36", price: 150},{size: "38", price: 150},{size: "40", price: 150},{size: "42", price: 150}], status: "", description: "ستايل بسيط وأنيق لإطلالة يومية مريحة ومرتبة - متوفر أبيض وأسود" },
  { name: "فستان ليلي زهري", brand: "Mervy", category: "فساتين", image: "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=400&h=400&fit=crop", sizes: [{size: "42", price: 340},{size: "44", price: 340},{size: "46", price: 340},{size: "48", price: 340}], status: "new", description: "لمسة من الزهر وأناقة ناعمة تحاكي أنوثتك" },
  { name: "تنورة روبي مع قميص بولكا", brand: "Mervy", category: "أطقم", image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=400&h=400&fit=crop", sizes: [{size: "36", price: 260},{size: "38", price: 260},{size: "40", price: 260},{size: "42", price: 260}], status: "", description: "تنورة باللون الأحمر الروبي الجذاب مع قميص بولكا دوت" },
  { name: "فستان سواريه أبيض فاخر", brand: "Mervy", category: "سواريه", image: "https://images.unsplash.com/photo-1594463750939-ebb28c3f7f75?w=400&h=400&fit=crop", sizes: [{size: "36", price: 450},{size: "38", price: 450},{size: "40", price: 450}], status: "bestseller", description: "فخامة الأبيض في أجمل تفاصيله - من مجموعة سواريه والوايت كوليكشن" },
  { name: "طقم شيفون زهر فاخر", brand: "Mervy", category: "أطقم", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=400&fit=crop", sizes: [{size: "36", price: 280},{size: "38", price: 280},{size: "40", price: 280},{size: "42", price: 280}], status: "new", description: "إطلالة أنثوية ناعمة بتفاصيل راقية - شيفون بلون الزهر" },
  { name: "تنورة جينز عصرية", brand: "Mervy", category: "تنانير", image: "https://images.unsplash.com/photo-1592301933927-35b597393c0a?w=400&h=400&fit=crop", sizes: [{size: "36", price: 180},{size: "38", price: 180},{size: "40", price: 180},{size: "42", price: 180}], status: "", description: "تنورة جينز مفتوحة بتصميم أنيق ومريح - ستايل سبورت شيك" },
  { name: "شيفون أسود بلمسة ذهبية", brand: "Mervy", category: "فساتين", image: "https://images.unsplash.com/photo-1562137369-1a1a0bc66744?w=400&h=400&fit=crop", sizes: [{size: "36", price: 320},{size: "38", price: 320},{size: "40", price: 320}], status: "special", description: "تفاصيل الزركون بتعطيه لمعة راقية - إطلالة فخمة" },
  { name: "تنورة دانتيل أنيقة", brand: "Mervy", category: "تنانير", image: "https://images.unsplash.com/photo-1577900232427-18219b9166a0?w=400&h=400&fit=crop", sizes: [{size: "36", price: 220},{size: "38", price: 220},{size: "40", price: 220},{size: "42", price: 220}], status: "", description: "تصاميم راقية بتفاصيل دانتيل بتنحكي بدون كلام" },
  { name: "فستان فيكتوريان ستايل", brand: "Mervy", category: "فساتين", image: "https://images.unsplash.com/photo-1518622358385-8ea7d0794bf6?w=400&h=400&fit=crop", sizes: [{size: "36", price: 380},{size: "38", price: 380},{size: "40", price: 380}], status: "bestseller", description: "قطعة فخمة جداً ستايل فيكتوريان - أناقة كلاسيكية" },
  { name: "بلايزر أنيق", brand: "Mervy", category: "بلايزرات", image: "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=400&h=400&fit=crop", sizes: [{size: "36", price: 250},{size: "38", price: 250},{size: "40", price: 250},{size: "42", price: 250}], status: "", description: "بلايزر بتصميم عصري وأنيق لإطلالة مميزة" },
  { name: "فستان سهرة خاطف للأنظار", brand: "Mervy", category: "سواريه", image: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?w=400&h=400&fit=crop", sizes: [{size: "36", price: 500},{size: "38", price: 500},{size: "40", price: 500}], status: "special", description: "دلّلي حالك بإطلالة فخمة ومميزة بسعر ما بيتفوّت" },
  { name: "فستان وردي أنيق", brand: "Mervy", category: "فساتين", image: "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?w=400&h=400&fit=crop", sizes: [{size: "36", price: 260},{size: "38", price: 260},{size: "40", price: 260},{size: "42", price: 260}], status: "", description: "أناقة هادئة بنقشة وردية تليق بكل الأوقات" },
  { name: "شيفون حالم بأكمام منفصلة", brand: "Mervy", category: "فساتين", image: "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400&h=400&fit=crop", sizes: [{size: "36", price: 340},{size: "38", price: 340},{size: "40", price: 340}], status: "new", description: "قطعة شيفون حالمة بتفاصيل فاخرة وأكمام منفصلة تضيف لمسة درامية" },
  { name: "فستان تطريز يدوي فاخر", brand: "Mervy", category: "فساتين", image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=400&h=400&fit=crop", sizes: [{size: "36", price: 400},{size: "38", price: 400},{size: "40", price: 400}], status: "special", description: "فخامة ناعمة بتفاصيل أنثوية راقية - تطريز يدوي فاخر" },
  { name: "شال صوف فاخر", brand: "Mervy", category: "شالات", image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc64?w=400&h=400&fit=crop", sizes: [{size: "Free Size", price: 120}], status: "", description: "شال صوف ناعم وفاخر لإطلالة شتوية دافئة" },
  { name: "فستان ربيعي لولو فضي", brand: "Mervy", category: "فساتين", image: "https://images.unsplash.com/photo-1550639525-c97d455acf70?w=400&h=400&fit=crop", sizes: [{size: "36", price: 300},{size: "38", price: 300},{size: "40", price: 300},{size: "42", price: 300}], status: "new", description: "ستايل أنيق ولمسة فخامة ناعمة لكل مناسباتك" },
  { name: "كولكشن عيد الأضحى", brand: "Mervy", category: "فساتين", image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d44?w=400&h=400&fit=crop", sizes: [{size: "36", price: 350},{size: "38", price: 350},{size: "40", price: 350},{size: "42", price: 350}], status: "bestseller", description: "من كولكشن عيد الأضحى - اختاري إطلالتك قبل الكل" },
  { name: "طقم فيكتوريان سكيرت وتوب", brand: "Mervy", category: "أطقم", image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=400&fit=crop", sizes: [{size: "36", price: 320},{size: "38", price: 320},{size: "40", price: 320}], status: "", description: "طقم تنورة وتوب ستايل فيكتوريان - أناقة كلاسيكية عصرية" },
  { name: "فستان حجاب أنيق", brand: "Mervy", category: "حجاب", image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?w=400&h=400&fit=crop", sizes: [{size: "38", price: 280},{size: "40", price: 280},{size: "42", price: 280},{size: "44", price: 280}], status: "", description: "تصميم محتشم وأنيق يناسب المحجبات" },
  { name: "بلوزة ستان فاخرة", brand: "Mervy", category: "قمصان", image: "https://images.unsplash.com/photo-1564257631407-4deb1f99d992?w=400&h=400&fit=crop", sizes: [{size: "36", price: 160},{size: "38", price: 160},{size: "40", price: 160},{size: "42", price: 160}], status: "", description: "بلوزة ستان بتصميم عصري لإطلالة شيك" }
];

function seedFirestoreData(deleteExisting) {
    var db = firebase.firestore();
    var batch = db.batch();
    var projectRef = db.collection('projects').doc('mervy');

    function doSeed() {
        seedProducts.forEach(function(product, index) {
            var docRef = projectRef.collection('products').doc('product_' + (index + 1));
            batch.set(docRef, product);
        });
        return batch.commit().then(function() {
            console.log('Seeded ' + seedProducts.length + ' products!');
            return seedProducts.length;
        });
    }

    if (deleteExisting) {
        return projectRef.collection('products').get().then(function(snapshot) {
            var deleteBatch = db.batch();
            snapshot.docs.forEach(function(doc) { deleteBatch.delete(doc.ref); });
            return deleteBatch.commit();
        }).then(doSeed);
    }
    return doSeed();
}