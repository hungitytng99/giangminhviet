const getUrls = require('get-urls');
function makeRandomString(length: number) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}
const getUniqueId = (id: string | undefined, level: number = 5) => {
    return id + "_" + makeRandomString(level);
}

const detectLinkInText = (text?: string) => {
    if (text) {
        // detect tag : start with # 
        const regrex = /#[a-z0-9A-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ:]+/g;
        const tagsList = text.match(regrex);
        tagsList?.forEach((element) => {
            text = text?.replace(element, "<a href=\"#\" style=\"color:#1978F6;\">" + element + "</a>")
        })
        // detect link
        getUrls(text).forEach((element: any) => {
            if (element) {
                text = text?.replace(element, `<a href=${element} style="color:#1978F6;">${element}</a>`)
            };
       })

    }
    return text;
}


const ListStringUtils = {
    getUniqueId,
    detectLinkInText,
}

export default ListStringUtils;