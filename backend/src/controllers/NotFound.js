function NotFound(req, res){
    return res.status(404).json({message: "Page not found", status: false})
}

export default NotFound